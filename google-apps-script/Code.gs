/**
 * 랜딩페이지 상담 신청 → 구글 시트 저장용 Apps Script.
 * 설치 방법: google-apps-script/README.md
 */

// 상담신청 DB 시트
const SPREADSHEET_ID = '여기에-시트-ID'; // 시트 주소의 /d/ 와 /edit 사이 문자열
const SHEET_GID = 0; // 첫 번째 탭

// Vercel 의 SHEET_WEBHOOK_SECRET 과 반드시 같아야 합니다.
const SECRET = '여기에-비밀값을-넣으세요';

// 시트 1행(열 제목). 필수 항목이 앞쪽에 오도록 순서를 고정합니다.
// 사이트에서 오는 항목 이름과 같아야 해당 칸에 들어갑니다.
const HEADERS = [
  '접수시각',
  '이름',
  '전화번호',
  '빌려준금액',
  '돈 종류',
  '갚기로 한 날',
  '보유자료',
  '상대방 상황',
  '처리상태',
  '담당자',
  '메모',
];

function sheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheets().filter(function (s) { return s.getSheetId() === SHEET_GID; })[0] || ss.getSheets()[0];
}

/**
 * 1행(열 제목)을 HEADERS 로 설정합니다.
 * Apps Script 편집기에서 이 함수를 선택하고 ▶ 실행 하면 됩니다. (처음 한 번)
 */
function setupHeaders() {
  const sh = sheet_();
  sh.getRange(1, 1, 1, HEADERS.length)
    .setValues([HEADERS])
    .setFontWeight('bold')
    .setBackground('#E8F3FF');
  sh.setFrozenRows(1);
  // 전화번호 열은 글자로 저장해 앞자리 0 이 사라지지 않게 합니다.
  sh.getRange(2, HEADERS.indexOf('전화번호') + 1, sh.getMaxRows() - 1, 1).setNumberFormat('@');
  sh.autoResizeColumns(1, HEADERS.length);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return json_({ ok: false, error: 'unauthorized' });
    const row = body.row || {};
    // 유입경로·연락희망시간 등: 시트 1행에 그 열을 직접 추가해 두었을 때만 기록합니다.
    const optional = body.optional || {};
    if (!row['이름'] || !row['전화번호']) return json_({ ok: false, error: 'missing required' });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sh = sheet_();
      if (sh.getLastRow() === 0 || String(sh.getRange(1, 1).getValue()) !== HEADERS[0]) setupHeaders();

      // 현재 1행을 읽고, 사이트에서 새 항목이 오면 맨 뒤에 열을 추가합니다.
      const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
      Object.keys(row).forEach(function (key) {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
          sh.getRange(1, headers.length).setValue(key).setFontWeight('bold').setBackground('#E8F3FF');
        }
      });
      sh.appendRow(headers.map(function (h) {
        if (h === '처리상태' && row[h] === undefined) return '신규';
        return safe_(row[h] !== undefined ? row[h] : optional[h]);
      }));
    } finally {
      lock.releaseLock();
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// 연결 확인용: 웹앱 주소를 브라우저로 열면 {"ok":true} 가 보입니다.
function doGet() {
  return json_({ ok: true });
}

// 010… 앞자리 0 이 사라지거나, = + - @ 로 시작하는 값이 수식으로 실행되지 않게 막습니다.
function safe_(v) {
  if (v === undefined || v === null) return '';
  const s = String(v);
  return /^[=+\-@0]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

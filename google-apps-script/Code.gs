/**
 * 랜딩페이지 상담 신청 → 구글 시트 저장용 Apps Script.
 *
 * 설치 방법은 google-apps-script/README.md 를 보세요.
 * 1) SECRET 값을 아무도 모르는 긴 문자열로 바꿉니다 (Vercel 의 SHEET_WEBHOOK_SECRET 과 똑같이).
 * 2) 배포 → 새 배포 → 유형: 웹 앱, 실행: 나, 액세스: 모든 사용자 → 배포.
 */

const SECRET = '여기에-비밀값을-넣으세요';
const SHEET_NAME = '상담신청';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return json_({ ok: false, error: 'unauthorized' });
    const row = body.row || {};

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

      // 첫 줄(열 이름)을 읽고, 처음 보는 항목이면 열을 추가합니다.
      let headers = sheet.getLastColumn() > 0
        ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String)
        : [];
      Object.keys(row).forEach(function (key) {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
          sheet.getRange(1, headers.length).setValue(key).setFontWeight('bold');
        }
      });
      if (sheet.getFrozenRows() === 0) sheet.setFrozenRows(1);

      sheet.appendRow(headers.map(function (h) { return safe_(row[h]); }));
    } finally {
      lock.releaseLock();
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// 연결 확인용: 웹앱 주소를 브라우저로 열면 "ok" 가 보입니다.
function doGet() {
  return json_({ ok: true, sheet: SHEET_NAME });
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

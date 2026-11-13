"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** 방문 시 광고 유입 정보(UTM 등)를 기억합니다. 화면에는 아무것도 그리지 않습니다. */
export function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}

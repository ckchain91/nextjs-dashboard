import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middelware(req: NextRequest){
    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', '*'); // 필요시 특정 도메인으로 제한 가능
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return res;

}

// API 경로 지정
export const config = {
    matcher: '/api/:path*',
  };
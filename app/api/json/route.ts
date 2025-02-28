// app/api/json/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // 기본 JSON 데이터
  const data = {
    message: 'Hello, this is a sample JSON response!',
    status: 'success',
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data, { status: 200 });
}
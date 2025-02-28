// app/api/external-api/route.ts
import { NextResponse } from 'next/server';
import https from 'https';

export async function GET() {
  try {
    const apiUrl = 'https://192.168.10.204:8006/api2/json/nodes/edu1/storage';

    // SSL 인증서 검증 비활성화 (fetch와 함께 사용 가능)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    // API 요청 헤더
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'PVEAPIToken=root@pam!nextjs=a5bc45ff-0385-4d66-9090-2ddefe15bda0',
    };

    // 외부 API 호출
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
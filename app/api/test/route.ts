import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json(
        { message: "Hello, this is a sample JSON response!", status: "success", timestamp: new Date().toISOString() },
        { status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
         }
        });
}       
// Compare this snippet from app/api/json/route.ts:
// // app/api/json/route.ts
// import { NextResponse } from 'next/server';
//
// export async function GET() {
//   // 기본 JSON 데이터
//   const data = {
//     message: 'Hello, this is a sample JSON response!',
//     status: 'success',            
import { NextResponse } from "next/server";
import { getNodestat } from "@/app/lib/proxmox";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    console.log(url);
    const timeframe = url.searchParams.get("timeframe") || "day";
    const node = "edu1";
    

    const nodes = await getNodestat(node,timeframe);
    console.log(nodes);
    return NextResponse.json(nodes);
  } catch (error : any) {
    console.log(error.message);
    return NextResponse.json({ error: "Failed to fetch Proxmox nodes" }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import { getNodes } from "@/app/lib/proxmox";

export async function GET() {
  try {
    const nodes = await getNodes();
    return NextResponse.json(nodes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Proxmox nodes" }, { status: 500 });
  }
}
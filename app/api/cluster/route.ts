import { NextResponse } from "next/server";
import { getClusterStatus } from "@/app/lib/proxmox";

export async function GET() {
  try {
    const nodes = await getClusterStatus();
    
    return NextResponse.json(nodes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Proxmox nodes" }, { status: 500 });
  }
}
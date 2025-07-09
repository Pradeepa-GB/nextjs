import { NextResponse } from "next/server"
import { dataList } from "@/app/data/dataList";


export async function GET() {
  return NextResponse.json(dataList);
}

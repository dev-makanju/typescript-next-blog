import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
      const cartegories = await prisma.category.findMany();
      return NextResponse.json({cartegories})
    }catch(error){
      return NextResponse.json('Something went wrong')
    }
}
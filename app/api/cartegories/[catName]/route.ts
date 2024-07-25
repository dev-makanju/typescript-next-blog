import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: {catName:string}}){
    const catName = params.catName
    try {
     const post = await prisma.category.findUnique({
        where: {catName},
        include: {posts: {include: {author: true}, orderBy: {createdAt: "desc"}}
     }
    })
     return NextResponse.json(post)
    }catch{
     return NextResponse.json({message:'Cannot fetch post'})       
    }
 }
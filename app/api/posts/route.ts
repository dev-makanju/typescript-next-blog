import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
    const { title , content, links, selectedCategory, imageUrl, publicId} = await req.json();
    const authorEmail = 'makurseme@gmail.com'
    if(!title || !content){
      return NextResponse.json(
        {error: "Title and content are required"},
        {status: 500})
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                links,
                imageUrl,
                catName: selectedCategory,
                authorEmail,
            }
        })

        console.log('Post created')
    }catch(error){
        return NextResponse.json({message: "Could not create post"})
    }
}
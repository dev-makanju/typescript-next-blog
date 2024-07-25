import { postsData } from "@/data"
import Link from "next/link"
import PostCard from "@/components/cards/PostCard"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CartegoryList from "@/components/category/CartegoryList";

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session){
       redirect('/sign-in')
    }
    return (
        <div>
            <div><CartegoryList/></div>
            {postsData && postsData.length > 0 ? 
                postsData.map((post)  => (<PostCard
                    id={post.id}
                    title={ post.title}
                    content={post.content}
                    author={post.author} 
                    authorEmail={post.author}
                    date={post.datePublished}
                    category={post.category}
                    links={post.links}
                    thumbnail={post.thumbnail}
                />)) 
                : (
                    <div className="py-6">
                        No Post Created yet.
                        <Link className="underline" href='/create-post'>Create Post</Link>
                    </div>
                )
             }
        </div>
    )
}
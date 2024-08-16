import Link from "next/link"
import PostCard from "@/components/cards/PostCard"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CartegoryList from "@/components/category/CartegoryList";
import { TPost } from "@/types";


const getPosts = async ():Promise<TPost[] | null> => {
   console.log('hello')
    try{
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
        cache: "no-store",
      })
      if(res.ok){
        const posts = await res.json()
        return posts  
      }
   }catch(e){
      console.log(e);
   }
   return null;
}

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session){
       redirect('/sign-in')
    }
    const posts = await getPosts();
    return (
        <div>
            <div><CartegoryList/></div>
            {posts && posts.length > 0 ? 
                posts.map((post)  => (<PostCard
                    id={post.id}
                    title={ post.title}
                    content={post.content}
                    author={post.author.name} 
                    authorEmail={post.authorEmail}
                    date={post.createdAt}
                    category={post.catName}
                    links={post.link || []}
                    thumbnail={post.imageUrl}
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
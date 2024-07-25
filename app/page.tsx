import PostCard from "@/components/cards/PostCard";
import CartegoryList from "@/components/category/CartegoryList";
import { postsData } from "@/data";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blog',
  description:'This section of the site explain how to use blogs for all activities'
}


export default function Home() {
  return (
    <div>
       <CartegoryList/>
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
        : (<div className="py-6">There's no Post Data</div>)
      }
  
    </div>
  );
}

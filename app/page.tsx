import PostCard from "@/components/cards/PostCard";
import CartegoryList from "@/components/category/CartegoryList";
import { postsData } from "@/data";

export default function Home() {
  return (
    <>
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
  
    </>
  );
}

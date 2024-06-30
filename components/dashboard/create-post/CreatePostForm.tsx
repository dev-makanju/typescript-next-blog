'use client'
import { cartigoriesData } from '@/data'
import { useState } from 'react'
import Link from 'next/link';

export default function CreatePostForm() {
    const [links,setlinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState("")
    
    const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       e.preventDefault();
       if(linkInput.trim() !== ""){
          setlinks((prev) => [...prev, linkInput])
          setLinkInput("");
       }
    }

    const deleteLink = (index: number) => {
       setlinks((prev) => prev.filter((_,i) => i !== index))
    }

    return (
        <div>
        <h2>Create Post</h2>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Title"/>
          <textarea placeholder="Content"></textarea>
          {links &&
            links.map((link, i) => (
              <div key={i} className="flex items-center gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </span>
                <Link className="link" href={link}>
                  {link}
                </Link>
                <span onClick={() => deleteLink(i)} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            ))}
  
          <div className="flex gap-2">
            <input
              className="flex-1"
              type="text"
              placeholder="Paste the link and click on Add"
              onChange={(e) => setLinkInput(e.target.value)}
              value={linkInput}
            />
            <button onClick={addLink} className="btn flex gap-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </span>
              Add
            </button>
          </div>
          <select className="p-3 rounded-md border appearance-none">
            <option value="">Select A Category</option>
            {cartigoriesData &&
              cartigoriesData.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
  
          <button className="primary-btn" type="submit">
            Create Post
          </button>
          <div className='p-2 text-red-500 font-bold'>Error message</div>
        </form>
      </div>
    )
}
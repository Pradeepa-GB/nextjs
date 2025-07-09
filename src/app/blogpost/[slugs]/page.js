
import { promises as fs, readFile } from 'fs';
import React from 'react'


async function page({params}) {
  

  function slugify(str) {
    return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const url = await fetch(`${baseUrl}/api/apiData`);
    const dataList = await url.json();
    const { slugs } = params;
   
  const newData = dataList.find((item) => slugify(item.title) === slugs);
  
  return (
    <>
    <div className='max-w-6xl p-6 mx-auto mt-1'>
      <div>
        <p className='text-center text-3xl'>Blog - {newData.title}</p>
       <hr class="my-4 border-b-2 border-gray-300 shadow-md" />
      </div>
      <div className='text-justify'>
        <p>{newData.content}</p>
      </div>
    </div>
    </>
    
  )
}

export default page
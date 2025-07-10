
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
    const newurl = "https://raw.githubusercontent.com/Pradeepa-GB/nextjs/refs/heads/main/src/app/data/dataList.json";
    const url = await fetch(newurl);
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
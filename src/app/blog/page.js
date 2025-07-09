
import Link from 'next/link'

export const dynamic = "force-dynamic";

async function Page() {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const url = await fetch(`${baseUrl}/api/apiData`);
    const dataList = await url.json();

 function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")   // replace spaces and special characters with hyphens
    .replace(/(^-|-$)+/g, "");      // remove leading/trailing hyphens
}

  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-10 px-5 py-6">
    {
        dataList.map((newData, index)=>(
<div key={index} class=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link href={`/blogpost/${slugify(newData.title)}`}>
        <h5 class="mb-2 text-2xl tracking-tight hover:underline font-normal text-gray-900 dark:text-white">{newData.title}</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{newData.content.split(" ").slice(0,22).join(" ") + "..."}</p>
    <Link href={`/blogpost/${slugify(newData.title)}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>
        ))
    }

</div>
    </>
  )
}

export default Page
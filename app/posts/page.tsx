export const dynamic = 'force-dynamic';

import api from '@/lib/api';
import Link from 'next/link';


type Post = {
  _id: string;
  title: string;
  content: string;
};

export default async function AllPostsPage() {
  const {data} = await api.get('/posts');  // Assuming your backend route is /posts
  console.log('Got post data');
  return (
    <div className=" max-w-2xl mx-auto mt-10">
      
      <h1 className="flex justify-between text-purple-400  text-2xl font-bold mb-4">
        <p>All Posts</p>
        <Link href="/posts/create" className='text-xl text-blue-400 dark:text-blue-800 hover:text-blue-600 hover:dark:text-blue-600'>Create Posts</Link>
      </h1>

      <div className="space-y-4">
        {data.map((post: Post, idx: number) => (
          <div key={idx} className="bg-purple-50 flex justify-between dark:bg-gray-800  border-2 border-purple-300 p-4 rounded">
          <div>
            <h2 className="font-semibold dark:text-white">{post.title}</h2>
            <p className='text-sm dark:text-white'>{post.content}</p>
          </div>
          <button  title='Delete Post' className="p-1 text-red-500 hover:text-red-700 cursor-pointer">🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

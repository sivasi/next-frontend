import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import api from '@/lib/api' // Make sure you have the API instance for Axios or fetch

// This is a server component to handle post creation form submission
export default async function CreatePostPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (!token) {
    // If no token is present, redirect the user to login page
    redirect('/not-allowed')
  }

  const handleCreatePost = async (formData: FormData) => {
    'use server'

    const title = formData.get('title') as string
    const content = formData.get('content') as string

      // Make the API call to the backend to create the post
      const res = await api.post('/posts', {
        title,
        content,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      if (res.status === 200) {
        console.log('New post created');
        // If the post is successfully created, redirect to the posts page
        redirect('/posts')
      } else {
        throw new Error('Failed to create the post')
      }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl text-blue-400 font-bold mb-4">Create Post</h1>
      <form action={handleCreatePost} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="w-full dark:text-white p-2 border border-blue-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="w-full dark:text-white p-2 border border-blue-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        />
        <button
          type="submit"
          className="w-full text-white bg-blue-600 cursor-pointer hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

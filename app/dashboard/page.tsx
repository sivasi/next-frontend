export const dynamic = 'force-dynamic';

import api from '@/lib/api'
import { cookies } from 'next/headers'
import Link from 'next/link';
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value

  if (!token) {
    redirect('/not-allowed')
  }

  const res = await api.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const {username, email} = res.data;
  console.log(res);

  return (
    <div>
      <h2 className="text-3xl mt-8 flex text-align-center justify-center text-purple-400 font-bold mb-4">Dashboard</h2>
      
      <div className='flex justify-center'>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Welcome {username}!
    </h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Email Id: {email}
  </p>
  <Link
    href="/posts"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Got to posts
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </Link>
</div>


      </div>
    </div>
  )
}

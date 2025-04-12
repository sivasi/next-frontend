import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value

  if (token) {
    console.log('Token is found redirected to the dashboard');
    redirect('/dashboard')
  }
  else{
    redirect('/posts');
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
      <p>Simple Blog Website using Next.js and Express.js</p>
    </div>
  )
}

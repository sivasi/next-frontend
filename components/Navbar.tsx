
import Link from "next/link"
const Navbar = () => {
    return (
      <nav className=" bg-white dark:bg-gray-800 shadow dark:shadow-gray-700 flex justify-between p-4">
        <Link href='/dashboard'><h1 className="text-xl text-blue-400 font-bold">My Blog</h1></Link>
        <p>
        <Link href='/login' className="text-purple-400"> Login</Link>
        </p>
      </nav>
    )
  }
  
  export default Navbar
  
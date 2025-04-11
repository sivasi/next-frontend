import Link from "next/link";

export default function NotAllowedPage() {
  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-pink-400 mb-4">
        Access Denied
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        You need to login to access this page.
      </p>
      <Link
        href="/login"
        className="text-white bg-blue-600 cursor-pointer hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go to Login
      </Link>
    </div>
  );
}

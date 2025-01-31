import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className='flex bg-gray-800 p-4 items-center'>
      <h1 className='text-3xl font-bold'>Navbar</h1>
      <div className='flex-1'>
        <ul className='flex ml-5 gap-5 items-center'>
          <Link
            href='/'
            className={`${
              pathname === '/'
                ? 'text-xl text-blue-400 font-bold'
                : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${
              pathname === '/about'
                ? 'text-xl text-blue-400 font-bold'
                : 'text-white'
            }`}
          >
            About
          </Link>
        </ul>
      </div>
      <div>
        <button
          onClick={() => router.push('/login')}
          className='bg-blue-500 px-4 py-2 rounded text-white text-sm hover:bg-blue-600'
        >
          Login
        </button>
      </div>
    </nav>
  );
}

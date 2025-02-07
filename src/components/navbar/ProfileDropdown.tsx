'use client';

import { Logout, PunchClock, Settings } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ProfileDropdown = () => {
    const router = useRouter();

    const logoutUser = () => {
        localStorage.removeItem('currentUser');
        router.push('/auth/login');
    }

  return (
    <ul className="w-fit bg-white rounded-b-xl shadow-xl py-6 space-y-2">
        <li>
            <Link href="/products" title="Wallet History" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
                <PunchClock/>
                <span>Products</span>
            </Link>
        </li>
        <li>
            <Link href="/settings" title="settings" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
                <Settings/>
                <span>settings</span>
            </Link>
        </li>
        <li>
            <button onClick={logoutUser} title="logout" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
                <Logout/>
                <span>logout</span>
            </button>
        </li>
    </ul>
  )
}

export default ProfileDropdown
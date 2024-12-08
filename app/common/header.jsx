"use client";

import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == '/login') {
      $('.navbar').remove();
    }
  });

  const logoutSubmit = () => {
    localStorage.removeItem('token');

    window.location.href = '/login';
  }

  return (
    <div className="navbar bg-[#55a399]">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-white">Derma Express Clinic</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src="/images/default-user-image.png" alt="user image" width={40} height={40} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#55a399] rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href="#" className="text-white">Settings</Link></li>
            <li><Link href="" className="text-white" onClick={() => logoutSubmit()}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
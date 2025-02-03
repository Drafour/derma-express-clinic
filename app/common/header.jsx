"use client";

import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import GlobalVariable from "../globals.js";

export default function Header() {
  const pathname = usePathname();

  console.log('pathname = '+pathname);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token    = localStorage.getItem('token');
      const decoded  = jwtDecode(token);
      const exp      = decoded.exp;
      // const date_exp = new Date(exp * 1000);
      const date_now = new Date();
      const now      = parseInt(date_now.getTime() / 1000);

      console.log(token);

      if (now >= exp) {
        logoutSubmit();
      }
    }

    if (pathname == '/login') {
      $('.container-navbar').remove();
    }
    else if (pathname == '/queue') {
      GlobalVariable.activePage = 'queue';

      $('.header-title').html('Queue');
    }
    else if (pathname.indexOf('receptionist') >= 0) {
      GlobalVariable.activePage = 'receptionist';

      $('.header-title').html('receptionist');
    }
    else if (pathname.indexOf('doctor') >= 0) {
      GlobalVariable.activePage = 'doctor';

      $('.header-title').html('doctor');
    }
    else if (pathname.indexOf('cashier') >= 0) {
      GlobalVariable.activePage = 'cashier';

      $('.header-title').html('cashier');
    }
    else if (pathname.indexOf('pharmacy') >= 0) {
      GlobalVariable.activePage = 'pharmacy';

      $('.header-title').html('pharmacy');
    }
    else if (pathname.indexOf('treatment') >= 0) {
      GlobalVariable.activePage = 'treatment';

      $('.header-title').html('treatment');
    }

    if (pathname == '/queue/display') {
      $('.container-navbar').addClass('hidden');
    }
    else {
      $('.container-navbar').removeClass('hidden');
    }
  });

  const toggleDropdownUser = () => {
    var obj = $('.dropdown-user .dropdown-content');

    if (obj.hasClass('hidden')) {
      obj.removeClass('hidden');
    }
    else {
      obj.addClass('hidden');
    }
  }

  const logoutSubmit = () => {
    localStorage.removeItem('token');

    window.location.href = '/login';
  }

  return (
    <div className="container-navbar flex align-center transition">
      <ul className="nav-left">
        <li>
          <h4 className="header-title"></h4>
        </li>
      </ul>
      <ul className="nav-right flex align-center">
        <li>
          <h5 className="flex"><Image src="/images/icon-pinpoint.svg" alt="pin point" width={24} height={24} />Derma Express Utan Kayu</h5>
        </li>
        <li className="dropdown-user" onClick={toggleDropdownUser}>
          <button className="flex align-center">Hello, John Doe <Image src="/images/default-user-picture.svg" alt="user picture" width={48} height={48} /></button>
          <ul className="dropdown-content hidden">
            <li><Link href="" onClick={() => logoutSubmit()}>Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
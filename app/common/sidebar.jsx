"use client";

import $ from "jquery"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == '/login') {
      $('.container-sidebar').remove();
    }
  });

  const toogleSubMenu = (type) => {
    if ($('.' + type).hasClass('opened')) {
      $('.' + type).removeClass('opened');
    }
    else {
      $('.opened').removeClass('opened');
      $('.' + type).addClass('opened');
    }
  }

  return (
    <ul className="container-sidebar">
      <li>
        <Link href="/">Dashboard</Link>
      </li>
      <li className="has-sub queue" onClick={() => toogleSubMenu('queue')}>
        <Link href="">Antrian <span><FontAwesomeIcon icon={faChevronUp} /></span></Link>
        <ul className="container-submenu">
          <li>
            <Link href="/queue/gate">Pintu Masuk</Link>
          </li>
          <li>
            <Link href="/">Resepsionis</Link>
          </li>
          <li>
            <Link href="/">Dokter</Link>
          </li>
          <li>
            <Link href="/">Kasir</Link>
          </li>
          <li>
            <Link href="/">Farmasi</Link>
          </li>
          <li>
            <Link href="/">Treatment</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/admission">Admission</Link>
      </li>
      <li className="has-sub customer" onClick={() => toogleSubMenu('customer')}>
        <Link href="">Customer <span><FontAwesomeIcon icon={faChevronUp} /></span></Link>
        <ul className="container-submenu">
          <li>
            <Link href="/customer">List</Link>
          </li>
          <li>
            <Link href="/customer/add">Add</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/check-doctor">Check Doctor</Link>
      </li>
      <li>
        <Link href="/schedule-control">Schedule Control</Link>
      </li>
    </ul>
  )
}
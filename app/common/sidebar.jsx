"use client";

import $ from "jquery"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import GlobalVariable from "../globals.js";

export default function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == '/login') {
      $('.container-sidebar').remove();
    }
    else if (pathname == '/queue/display') {
      $('.container-sidebar').addClass('hidden');
    }
    else {
      $('.container-sidebar').removeClass('hidden');
    }

    // $('.main-menu').addClass('hidden');
    // $('.menu-link').removeClass('active');
    // $('.menu-link.has-child').removeClass('open');
    // $('.menu-link.has-child').next('ul').addClass('hidden');

    // if (GlobalVariable.activePage == 'queue') {
    //   if (pathname == '/queue') {
    //     $('.queue-menu .dashboard-menu .menu-link').addClass('active');
    //   }

    //   $('.main-link').attr('href', '/queue');
    //   $('.queue-menu').removeClass('hidden');
    // }
    // else if (GlobalVariable.activePage == 'receptionist') {
    //   if (pathname == '/receptionist') {
    //     $('.receptionist-menu .dashboard-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('select-counter') >= 0) {
    //     $('.receptionist-menu .select-counter-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('display-queue') >= 0) {
    //     $('.receptionist-menu .queue-monitor-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('admission/search') >= 0 || pathname.indexOf('admission/add-patient') >= 0 || pathname.indexOf('admission/edit-patient') >= 0) {
    //     $('.receptionist-menu .patients-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('admission') >= 0 || pathname.indexOf('admission/new-admission') >= 0 || pathname.indexOf('admission/reschedule') >= 0 || pathname.indexOf('admission/new-reschedule') >= 0) {
    //     $('.receptionist-menu .admission-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('consultation-room-monitoring') >= 0) {
    //     $('.receptionist-menu .consultation-room-monitor-menu .menu-link').addClass('active');
    //   }

    //   $('.main-link').attr('href', '/receptionist');
    //   $('.receptionist-menu').removeClass('hidden');
    // }
    // else if (GlobalVariable.activePage == 'doctor') {
    //   if (pathname == '/doctor') {
    //     $('.doctor-menu .dashboard-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('select-room') >= 0 || pathname.indexOf('consultation-list') >= 0 || pathname.indexOf('consultation-wizard-1') >= 0 || pathname.indexOf('consultation-wizard-2') >= 0 || pathname.indexOf('consultation-wizard-3') >= 0) {
    //     $('.doctor-menu .consultation-menu .menu-link').addClass('active');
    //   }

    //   $('.main-link').attr('href', '/doctor');
    //   $('.doctor-menu').removeClass('hidden');
    // }
    // else if (GlobalVariable.activePage == 'cashier') {
    //   if (pathname == '/cashier') {
    //     $('.cashier-menu .dashboard-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('queue') >= 0) {
    //     $('.cashier-menu .cashier-queue-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('history-transaction') >= 0 || pathname.indexOf('detail-transaction') >= 0 || pathname.indexOf('detail-payment') >= 0) {
    //     $('.cashier-menu .history-menu .menu-link').addClass('active');
    //   }

    //   $('.main-link').attr('href', '/cashier');
    //   $('.cashier-menu').removeClass('hidden');
    // }
    // else if (GlobalVariable.activePage == 'pharmacy') {
    //   if (pathname == '/pharmacy') {
    //     $('.pharmacy-menu .dashboard-menu .menu-link').addClass('active');
    //   }
    //   else if (pathname.indexOf('taking-medicine') >= 0 || pathname.indexOf('treatment') >= 0 || pathname.indexOf('receipt') >= 0) {
    //     $('.pharmacy-menu .pharmacy-queue-menu .menu-link').addClass('active');
    //   }

    //   $('.main-link').attr('href', '/pharmacy');
    //   $('.pharmacy-menu').removeClass('hidden');
    // }
    // else if (GlobalVariable.activePage == 'treatment') {
    //   $('.main-link').attr('href', '/treatment');
    //   $('.treatment-menu').removeClass('hidden');
    // }
  });

  const toggleMenu = (target) => {
    var obj  = $('.' + target + '-menu .menu-link');
    var next = obj.next('ul');

    if (next.hasClass('hidden')) {
      $('.menu-link.has-child').removeClass('open');
      $('.menu-link.has-child').next('ul').addClass('hidden');
      obj.addClass('open');
      next.removeClass('hidden');
    }
    else {
      obj.removeClass('open');
      next.addClass('hidden');
    }
  }

  return (
    <div className="container-sidebar transition">

      <div className="main-logo">
        <a href="/" className="main-link">
          <Image src="/images/logo-01.svg" alt="Derma Express" width={84} height={59} />
        </a>
      </div>

      <h5 className="m-top-15">Queue</h5>
      <ul className="main-menu queue-menu">
        <li className="dashboard-menu">
          <Link href="/queue" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
      </ul>

      <h5 className="m-top-15">Receptionist</h5>
      <ul className="main-menu receptionist-menu">
        <li className="dashboard-menu">
          <Link href="/receptionist" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
        <li className="select-counter-menu">
          <Link href="/receptionist/select-counter" className="menu-link flex align-center">
            <Image src="/images/icon-tags.svg" className="menu-icon" alt="tags" width={24} height={24} />
            <span>Select Counter</span>
          </Link>
        </li>
        <li className="queue-monitor-menu">
          <Link href="/receptionist/display-queue" className="menu-link flex align-center">
            <Image src="/images/icon-calendar.svg" className="menu-icon" alt="calendar" width={24} height={24} />
            <span>Queue Monitor</span>
          </Link>
        </li>
        <li className="patients-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('patients')}>
            <Image src="/images/icon-users.svg" className="menu-icon" alt="users" width={24} height={24} />
            <span>Patients</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/receptionist/admission/search" className="flex align-center"><span>Search</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/add-patient" className="flex align-center"><span>Add</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/edit-patient" className="flex align-center"><span>Edit</span></Link>
            </li>
          </ul>
        </li>
        <li className="admission-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('admission')}>
            <Image src="/images/icon-folders.svg" className="menu-icon" alt="folders" width={24} height={24} />
            <span>Admission</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/receptionist/admission" className="flex align-center"><span>List Admission</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/new-admission" className="flex align-center"><span>New Admission</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/edit-admission" className="flex align-center"><span>Edit Admission</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/reschedule" className="flex align-center"><span>Reschedule</span></Link>
            </li>
            <li>
              <Link href="/receptionist/admission/new-reschedule" className="flex align-center"><span>New & Reschedule</span></Link>
            </li>
          </ul>
        </li>
        <li className="consultation-room-monitor-menu">
          <Link href="/receptionist/admission/consultation-room-monitoring" className="menu-link flex align-center">
            <Image src="/images/icon-document.svg" className="menu-icon" alt="document" width={24} height={24} />
            <span>Consultation Room Monitor</span>
          </Link>
        </li>
      </ul>

      <h5 className="m-top-15">Doctor</h5>
      <ul className="main-menu doctor-menu">
        <li className="dashboard-menu">
          <Link href="/doctor" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
        <li className="consultation-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('consultation')}>
            <Image src="/images/icon-document.svg" className="menu-icon" alt="document" width={24} height={24} />
            <span>Consultation</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/doctor/select-room" className="flex align-center"><span>Select Room</span></Link>
            </li>
            <li>
              <Link href="/doctor/consultation-list" className="flex align-center"><span>Consultation List</span></Link>
            </li>
            <li>
              <Link href="/doctor/consultation-wizard-1" className="flex align-center"><span>Consultation Wizard 1</span></Link>
            </li>
            <li>
              <Link href="/doctor/consultation-wizard-2" className="flex align-center"><span>Consultation Wizard 2</span></Link>
            </li>
            <li>
              <Link href="/doctor/consultation-wizard-3" className="flex align-center"><span>Consultation Wizard 3</span></Link>
            </li>
          </ul>
        </li>
      </ul>

      <h5 className="m-top-15">Cashier</h5>
      <ul className="main-menu cashier-menu">
        <li className="dashboard-menu">
          <Link href="/cashier" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
        <li className="cashier-queue-menu">
          <Link href="/cashier/queue" className="menu-link flex align-center">
            <Image src="/images/icon-calendar.svg" className="menu-icon" alt="calendar" width={24} height={24} />
            <span>Queue</span>
          </Link>
        </li>
        <li className="history-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('history')}>
            <Image src="/images/icon-folders.svg" className="menu-icon" alt="folders" width={24} height={24} />
            <span>History</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/cashier/history-transaction" className="flex align-center"><span>Transaction List</span></Link>
            </li>
            <li>
              <Link href="/cashier/detail-transaction" className="flex align-center"><span>Transaction Details</span></Link>
            </li>
            <li>
              <Link href="/cashier/detail-payment" className="flex align-center"><span>Payment Details</span></Link>
            </li>
          </ul>
        </li>
      </ul>

      <h5 className="m-top-15">Pharmacy</h5>
      <ul className="main-menu pharmacy-menu">
        <li className="dashboard-menu">
          <Link href="/pharmacy" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
        <li className="pharmacy-queue-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('queue')}>
            <Image src="/images/icon-calendar.svg" className="menu-icon" alt="calendar" width={24} height={24} />
            <span>Queue</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/pharmacy/queue/taking-medicine" className="flex align-center"><span>Taking Medicine</span></Link>
            </li>
            <li>
              <Link href="/pharmacy/queue/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
            <li>
              <Link href="/pharmacy/queue/receipt" className="flex align-center"><span>Receipt</span></Link>
            </li>
            <li>
              <Link href="/pharmacy/queue/detail/taking-medicine" className="flex align-center"><span>Taking Medicine Details</span></Link>
            </li>
          </ul>
        </li>
      </ul>

      <h5 className="m-top-15">Treatment</h5>
      <ul className="main-menu treatment-menu">
        <li className="dashboard-menu">
          <Link href="/treatment" className="menu-link flex align-center">
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li className="dashboard-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('dashboard')}>
            <Image src="/images/icon-home.svg" className="menu-icon" alt="home" width={24} height={24} />
            <span>Dashboard</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/queue" className="flex align-center"><span>Queue</span></Link>
            </li>
            <li>
              <Link href="/receptionist" className="flex align-center"><span>Receptionist</span></Link>
            </li>
            <li>
              <Link href="/doctor" className="flex align-center"><span>Doctor</span></Link>
            </li>
            <li>
              <Link href="/cashier" className="flex align-center"><span>Cashier</span></Link>
            </li>
            <li>
              <Link href="/pharmacy" className="flex align-center"><span>Pharmacy</span></Link>
            </li>
            <li>
              <Link href="/treatment" className="flex align-center"><span>Treatment</span></Link>
            </li>
          </ul>
        </li> */}
        <li className="treatments-menu">
          <button className="menu-link flex align-center has-child" onClick={() => toggleMenu('treatments')}>
            <Image src="/images/icon-document.svg" className="menu-icon" alt="document" width={24} height={24} />
            <span>Treatment</span>
            <Image src="/images/icon-chevron-down.svg" className="menu-chevron transition" alt="chevron" width={24} height={24} />
          </button>
          <ul className="hidden">
            <li>
              <Link href="/treatment/detail-patient" className="flex align-center"><span>Patient Details</span></Link>
            </li>
            <li>
              <Link href="/treatment/detail-treatment" className="flex align-center"><span>Treatment Details</span></Link>
            </li>
            <li>
              <Link href="/treatment/treatment-reschedule" className="flex align-center"><span>Treatment Reschedule</span></Link>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  )
}
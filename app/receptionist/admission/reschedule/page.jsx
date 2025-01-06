"use client";

import $ from "jquery";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      $('.container-preloader-page').remove();
    }
  });

  return (
    <div>
      <div className="container-body transition">
        <div className="section-reschedule">
          <div className="flex flex-column w-70 margin-auto">
            <div className="flex m-bottom-20">
              <div>
                <p>Information</p>
                <h4>Normal</h4>
              </div>
              <div>
                <p>WI Date</p>
                <h5>Wed, 14 Nov 2024</h5>
              </div>
              <div>
                <p>Doctor</p>
                <h5>dr. Deffina Widjanarko</h5>
              </div>
              <div>
                <p>WI Status</p>
                <h5>Entry</h5>
              </div>
            </div>
            <div className="m-bottom-20">
              <h4>Treatment</h4>
              <h5>Oxygen Hydrating Therapy</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <Link href="/receptionist/admission/consultation-room-monitoring" className="btn btn-primary">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
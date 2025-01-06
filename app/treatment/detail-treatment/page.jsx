"use client";

import $ from "jquery";
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
        <div className="section-treatment-detail w-90 margin-auto">
          <div className="container-detail-box flex justify-content-center">
            <div className="detail-content-box w-70">
              <div className="flex flex-column">
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
                <div className="m-bottom-100">
                  <h4>Treatment</h4>
                  <h5>Oxygen Hydrating Therapy</h5>
                  <p className="m-bottom-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <ul>
                    <li>Treatment 01</li>
                    <li>Treatment 02</li>
                    <li>Treatment 03</li>
                    <li>Treatment 04</li>
                    <li>Treatment 05</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detail-sidebar-box w-25">
              <div className="flex flex-column">
                <h2 className="m-bottom-20">#A0001</h2>
                <p>Name</p>
                <h5 className="m-bottom-10">Dian Sastrowardoyo</h5>
                <p>Birth Date</p>
                <h5 className="m-bottom-40">16 Maret 1982</h5>
                <div className="container-button">
                  <button className="btn btn-secondary-outline w-100 m-bottom-10">Rescheduled</button>
                  <button className="btn btn-primary w-100">Treatment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
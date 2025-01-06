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
        <div className="section-select-room w-90 margin-auto">
          <div className="container-room-box flex justify-content-center">
            <div className="room-box flex flex-column">
              <div className="flex align-center">
                <img src="/images/icon-door.svg" alt="room" />
                <h3>Room 1.1</h3>
              </div>
              <div className="box-doctor flex align-center m-top-20">
                <div>
                  <h4>dr. Deffina Widjanarko</h4>
                  <p className="flex align-center"><img src="/images/icon-clock.svg" alt="clock" /> 12 AM, 24 Nov 2024</p>
                </div>
                <button className="btn btn-success">Booked</button>
              </div>
            </div>
            <div className="room-box flex flex-column">
              <div className="flex align-center">
                <img src="/images/icon-door.svg" alt="room" />
                <h3>Room 1.2</h3>
              </div>
              <div className="box-footer flex justify-content-end">
                <Link href="/doctor/consultation-list" className="btn btn-primary">Keep</Link>
              </div>
            </div>
            <div className="room-box flex flex-column">
              <div className="flex align-center">
                <img src="/images/icon-door.svg" alt="room" />
                <h3>Room 1.3</h3>
              </div>
              <div className="box-doctor flex align-center m-top-20">
                <div>
                  <h4>Dr. Stephen Strange</h4>
                  <p className="flex align-center"><img src="/images/icon-clock.svg" alt="clock" /> 01 PM, 27 Nov 2024</p>
                </div>
                <button className="btn btn-success">Booked</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
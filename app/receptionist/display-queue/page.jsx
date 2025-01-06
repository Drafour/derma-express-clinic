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
        <div className="section-display-queue w-90 margin-auto">
          <div className="container-queue-box flex justify-content-center">
            <div className="queue-box flex flex-column text-center">
              <h2>A0001</h2>
              <p>Counter 1</p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0002</h2>
              <p>Counter 2</p>
              <div className="flex justify-content-center">
                <a href="#" className="btn btn-secondary-outline">Delete</a>
                <a href="#" className="btn btn-secondary-fill">Recall</a>
                <a href="/receptionist/admission/search" className="btn btn-secondary-outline">Admission</a>
              </div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0003</h2>
              <p></p>
              <div className="flex justify-content-center">
                <a href="#" className="btn btn-secondary-fill">Call</a>
              </div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0004</h2>
              <p>Counter 3</p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0005</h2>
              <p></p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0006</h2>
              <p></p>
              <div className="flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
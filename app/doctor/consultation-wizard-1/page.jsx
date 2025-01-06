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
        <div className="section-new-admission">
          <div className="flex flex-column w-70 margin-auto">
            <h2 className="text-center">Form Medical Record</h2>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <Link href="/doctor/consultation-wizard-2" className="btn btn-primary">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
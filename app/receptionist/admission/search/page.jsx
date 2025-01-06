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
        <div className="section-admission-search text-center w-50 margin-auto">
          <h2>Cari Data Pasien</h2>
          <p>Cari data pasien berdasarkan nama, Nomor HP atau Nomor KTP.</p>
          <div className="flex flex-column">
            <label className="m-bottom-5" htmlFor="input-patient">Name / Phone / ID</label>
            <input type="text" className="text-center" id="input-patient" name="input-patient" />
          </div>
          <div>
            <a href="/receptionist/admission/patient-details" className="btn btn-primary">Search</a>
            <a href="/receptionist/admission/add-patient" className="btn btn-secondary-fill">Add</a>
          </div>
        </div>
      </div>
    </div>
  )
}
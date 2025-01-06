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
        <div className="section-patient-details-header">
          <div className="flex align-center w-90 margin-auto">
            <div className="header-left flex align-center">
              <div className="patient-picture"><span>DS</span></div>
              <div className="patient-name">
                <p>DM89006076</p>
                <h4>Dian Sastrowardoyo</h4>
                <p>Reguler</p>
              </div>
            </div>
            <div className="header-right align-center">
              <Link href="/treatment/detail-treatment" className="btn btn-secondary-fill">Treatment</Link>
              <Link href="/treatment/treatment-reschedule" className="btn btn-secondary-fill">Reschedule</Link>
              <a href="#" className="btn btn-secondary-fill">Room</a>
            </div>
          </div>
        </div>
        <div className="section-patient-details-body">
          <div className="flex flex-column w-90 margin-auto">
            <div className="flex m-bottom-20">
              <div>
                <p>Last Visit</p>
                <h5 className="flex align-center"><img src="/images/icon-calendar.svg" alt="calendar" width={18} height={18} /> 14 November 2024</h5>
              </div>
              <div>
                <p>Total</p>
                <h5 className="flex align-center"><img src="/images/icon-time-forward.svg" alt="time forward" width={18} height={18} /> 12 Visit <a href="#">History</a></h5>
              </div>
              <div>
                <p>Klinik</p>
                <h5 className="flex align-center"><img src="/images/icon-map-marker.svg" alt="map marker" width={18} height={18} /> Derma Express Depok</h5>
              </div>
              <div>
                <p>Dokter</p>
                <h5 className="flex align-center"><img src="/images/icon-medical.svg" alt="medical" width={18} height={18} /> dr. Deffina Widjanarko</h5>
              </div>
            </div>
            <div className="m-bottom-20">
              <p>Phone / NIK</p>
              <h5>0812-3456-7890</h5>
            </div>
            <div className="m-bottom-20">
              <p>Customer ID</p>
              <h5>DM89006076</h5>
            </div>
            <div className="m-bottom-20">
              <p>Address</p>
              <h5>Jl. Kutilang No.49, Jakarta</h5>
            </div>
            <div className="flex m-bottom-20">
              <div>
                <p>Gender</p>
                <h5>Female</h5>
              </div>
              <div>
                <p>Age</p>
                <h5>17</h5>
              </div>
            </div>
            <div className="m-bottom-20">
              <p>Patient Type</p>
              <h5>Reguler</h5>
            </div>
            <div className="m-bottom-20">
              <p>Visit Type</p>
              <h5>Reguler</h5>
            </div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <button href="#" className="btn btn-primary">Call Patient</button>
            <button href="#" className="btn btn-primary">Call Doctor</button>
          </div>
        </div>
      </div>
    </div>
  )
}
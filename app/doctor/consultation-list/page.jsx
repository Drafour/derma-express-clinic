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
        <div className="section-home-doctor w-90 margin-auto">
          <div className="flex justify-content-end">
            <Link href="/doctor" className="btn btn-secondary-fill">Exit</Link>
          </div>
          <div className="container-home-box flex">
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10">Konsultasi</h4>
              <ul>
                <li>
                  <Link href="/doctor/consultation-wizard-1" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0001</p>
                        <h4>Dian Sastrowardoyo</h4>
                      </div>
                    </div>
                    <div className="container-button m-top-10">
                      <button className="btn btn-secondary-outline btn-remove">Remove</button>
                      <button className="btn btn-secondary-fill btn-call">Call</button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/doctor/consultation-wizard-1" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture blue"><span>CK</span></div>
                      <div className="patient-name">
                        <p>A0002</p>
                        <h4>Citra Kirana</h4>
                      </div>
                    </div>
                    <div className="container-button m-top-10">
                      <button className="btn btn-secondary-outline btn-remove">Remove</button>
                      <button className="btn btn-secondary-fill btn-call">Call</button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/doctor/consultation-wizard-1" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>MA</span></div>
                      <div className="patient-name">
                        <p>A0003</p>
                        <h4>Maudy Ayunda</h4>
                      </div>
                    </div>
                    <div className="container-button m-top-10">
                      <button className="btn btn-secondary-outline btn-remove">Remove</button>
                      <button className="btn btn-secondary-fill btn-call">Call</button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10">Daftar Konsultasi (WI)</h4>
              <div className="box-wi"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
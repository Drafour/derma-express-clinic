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
        <div className="section-consultation-room-monitoring w-90 margin-auto">
          <div className="container-room-box flex">
            <div className="room-box flex flex-column w-33">
              <h4 className="box-name text-center m-bottom-10">Consultation Room 01</h4>
              <div className="box-doctor text-center m-bottom-20">dr. Deffina Widjanarko</div>
              <ul>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>DS</span></div>
                    <div className="patient-name">
                      <p>A0001</p>
                      <h4>Dian Sastrowardoyo</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>CK</span></div>
                    <div className="patient-name">
                      <p>A0002</p>
                      <h4>Citra Kirana</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>MA</span></div>
                    <div className="patient-name">
                      <p>A0003</p>
                      <h4>Maudy Ayunda</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="room-box flex flex-column w-33">
              <h4 className="box-name text-center m-bottom-10">Consultation Room 02</h4>
              <div className="box-doctor text-center m-bottom-20">Dr. Stephen Strange</div>
              <ul>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>YK</span></div>
                    <div className="patient-name">
                      <p>A0004</p>
                      <h4>Yuki Kato</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="room-box flex flex-column w-33">
              <h4 className="box-name text-center m-bottom-10">Consultation Room 03</h4>
              <div className="box-doctor text-center m-bottom-20">dr. Maria Utami</div>
              <ul>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>CI</span></div>
                    <div className="patient-name">
                      <p>A0005</p>
                      <h4>Chelsea Islan</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture"><span>YK</span></div>
                    <div className="patient-name">
                      <p>A0006</p>
                      <h4>Velove Vexia</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
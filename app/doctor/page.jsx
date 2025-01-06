"use client";

import $ from "jquery";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Page() {
  const router            = useRouter();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      $('.container-preloader-page').remove();
    }
  });

  const changeCalendar = (nextValue) => {
    setValue(nextValue);
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-home-doctor w-90 margin-auto">
          <div className="flex justify-content-end">
            <Link href="/doctor/select-room" className="btn btn-secondary-fill">Mulai Konsultasi</Link>
          </div>
          <div className="container-home-box flex">
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10">Konsultasi</h4>
              <ul>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture yellow"><span>DS</span></div>
                    <div className="patient-name">
                      <p>A0001</p>
                      <h4>Dian Sastrowardoyo</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture blue"><span>CK</span></div>
                    <div className="patient-name">
                      <p>A0002</p>
                      <h4>Citra Kirana</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture yellow"><span>MA</span></div>
                    <div className="patient-name">
                      <p>A0003</p>
                      <h4>Maudy Ayunda</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10">Treatment</h4>
              <ul>
                <li>
                  <div className="box-patient flex align-center m-bottom-10">
                    <div className="patient-picture yellow"><span>YK</span></div>
                    <div className="patient-name">
                      <p>A0004</p>
                      <h4>Yuki Kato</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10">Daftar Konsultasi (WI)</h4>
              <div className="box-wi"></div>
            </div>
            <div className="home-box flex flex-column w-25">
              <h4 className="box-name text-center m-bottom-10"></h4>
              <div className="box-calendar">
                <Calendar className="m-bottom-20" onChange={changeCalendar} value={value} />
                <ul>
                  <li>
                    <div className="box-schedule flex align-center m-bottom-10">
                      <div className="schedule-picture"></div>
                      <div className="schedule-name">
                        <h4>Schedule 01</h4>
                        <p>08:00 - 08:30</p>
                      </div>
                      <a href="#">
                        <img src="/images/icon-chevron-right-circle.svg" alt="chevron right circle" width={32} height={32} />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="box-schedule flex align-center m-bottom-10">
                      <div className="schedule-picture"></div>
                      <div className="schedule-name">
                        <h4>Schedule 02</h4>
                        <p>08:30 - 09:10</p>
                      </div>
                      <a href="#">
                        <img src="/images/icon-chevron-right-circle.svg" alt="chevron right circle" width={32} height={32} />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="box-schedule flex align-center m-bottom-10">
                      <div className="schedule-picture"></div>
                      <div className="schedule-name">
                        <h4>Schedule 03</h4>
                        <p>09:10 - 10:00</p>
                      </div>
                      <a href="#">
                        <img src="/images/icon-chevron-right-circle.svg" alt="chevron right circle" width={32} height={32} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
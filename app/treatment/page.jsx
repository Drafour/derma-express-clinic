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
        <div className="section-home-treatment w-90 margin-auto">
          <div className="container-button flex align-center justify-content-center m-bottom-30">
            <button className="btn">Floor 1</button>
            <button className="btn">Floor 2</button>
            <button className="btn active">Floor 3</button>
            <button className="btn">Floor 4</button>
          </div>
          <div className="container-home-box flex">
            <div className="home-box w-33">
              <div className="room-box flex flex-column m-bottom-20">
                <div className="flex align-center">
                  <img src="/images/icon-door.svg" alt="room" width={38} height={39} />
                  <h3>Room 1.1</h3>
                </div>
                <div className="box-doctor flex align-center m-top-20">
                  <div>
                    <h4>dr. Deffina Widjanarko</h4>
                    <p className="flex align-center"><img src="/images/icon-clock.svg" alt="clock" width={14} height={15} /> 12 AM, 24 Nov 2024</p>
                  </div>
                  <button className="btn btn-success">Booked</button>
                </div>
              </div>
              <ul>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture blue"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0001</p>
                        <h4>Dian Sastrowardoyo</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0002</p>
                        <h4>Citra Kirana</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0003</p>
                        <h4>Maudy Ayunda</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-box w-33">
              <div className="room-box flex flex-column m-bottom-20">
                <div className="flex align-center">
                  <img src="/images/icon-door.svg" alt="room" width={38} height={39} />
                  <h3>Room 1.2</h3>
                </div>
                <div className="box-doctor flex align-center m-top-20">
                  <div>
                    <h4>Dr. Stephen Strang</h4>
                    <p className="flex align-center"><img src="/images/icon-clock.svg" alt="clock" width={14} height={15} /> 12 AM, 24 Nov 2024</p>
                  </div>
                  <button className="btn btn-success">Booked</button>
                </div>
              </div>
              <ul>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0004</p>
                        <h4>Yuki Kato</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="home-box w-33">
              <div className="room-box flex flex-column m-bottom-20">
                <div className="flex align-center">
                  <img src="/images/icon-door.svg" alt="room" width={38} height={39} />
                  <h3>Room 1.3</h3>
                </div>
                <div className="box-doctor flex align-center m-top-20">
                  <div>
                    <h4>dr. Maria Utami</h4>
                    <p className="flex align-center"><img src="/images/icon-clock.svg" alt="clock" width={14} height={15} /> 12 AM, 24 Nov 2024</p>
                  </div>
                  <button className="btn btn-success">Booked</button>
                </div>
              </div>
              <ul>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>CI</span></div>
                      <div className="patient-name">
                        <p>A0005</p>
                        <h4>Chelsea Islan</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/treatment/detail-patient" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>VV</span></div>
                      <div className="patient-name">
                        <p>A0006</p>
                        <h4>Velove Vexia</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
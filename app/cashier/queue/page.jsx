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
        <div className="section-consultation-room-monitoring w-90 margin-auto">
          <div className="container-room-box flex">
            <div className="room-box flex flex-column w-33">
              <div className="box-title text-center m-bottom-20">Consultation Room 01</div>
              <ul>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color blue">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0001</p>
                        <h4>Dian Sastrowardoyo</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>1 Item</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color yellow">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>CK</span></div>
                      <div className="patient-name">
                        <p>A0002</p>
                        <h4>Citra Kirana</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>4 Items</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color yellow">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>MA</span></div>
                      <div className="patient-name">
                        <p>A0003</p>
                        <h4>Maudy Ayunda</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>2 Items</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="room-box flex flex-column w-33">
              <div className="box-title text-center m-bottom-20">Consultation Room 02</div>
              <ul>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color yellow">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>YK</span></div>
                      <div className="patient-name">
                        <p>A0004</p>
                        <h4>Yuki Kato</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>3 Items</span>
                    </h5>
                  </Link>
                </li>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color blue">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>CI</span></div>
                      <div className="patient-name">
                        <p>A0005</p>
                        <h4>Chelsea Islan</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>2 Items</span>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="room-box flex flex-column w-33">
              <div className="box-title text-center m-bottom-20">Consultation Room 03</div>
              <ul>
                <li>
                  <Link href="/cashier/detail-payment" className="box-patient flex flex-column m-bottom-10 has-color yellow">
                    <div className="flex align-center">
                      <button className="btn btn-delete">
                        <img src="/images/icon-close-circle-01.svg" alt="delete" width={24} height={24} />
                      </button>
                      <div className="patient-picture"><span>VV</span></div>
                      <div className="patient-name">
                        <p>A0006</p>
                        <h4>Velove Vexia</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine-bottle-01.svg" alt="medicine" width={18} height={18} />
                      <span>6 Items</span>
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
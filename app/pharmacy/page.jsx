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
        <div className="section-home-pharmacy w-90 margin-auto">
          <div className="container-home-box flex">
            <div className="home-box w-33">
              <h2 className="m-bottom-20">Pengambilan Obat</h2>
              <ul>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
              </ul>
            </div>
            <div className="home-box w-33">
              <h2 className="m-bottom-20">Treatment</h2>
              <ul>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0001</p>
                        <h4>Dian Sastrowardoyo</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture blue"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0002</p>
                        <h4>Citra Kirana</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
              </ul>
            </div>
            <div className="home-box w-33">
              <h2 className="m-bottom-20">Receipt</h2>
              <ul>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture yellow"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0001</p>
                        <h4>Dian Sastrowardoyo</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
                    <div className="flex align-center">
                      <div className="patient-picture blue"><span>DS</span></div>
                      <div className="patient-name">
                        <p>A0002</p>
                        <h4>Citra Kirana</h4>
                      </div>
                    </div>
                    <h5 className="flex align-center m-top-10">
                      <img src="/images/icon-vaccine.svg" alt="medicine" width={18} height={18} />
                      <span>Oxygen Hydrating Therapy</span>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
                <li>
                  <a href="#" className="box-patient flex flex-column m-bottom-10">
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
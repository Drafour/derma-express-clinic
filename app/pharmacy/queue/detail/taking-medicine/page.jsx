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
        <div className="section-detail-pharmacy w-80 margin-auto">
          <div className="container-detail-box flex justify-content-center">
            <div className="detail-content-box w-50">
              <div>
                <div className="detail-box">
                  <div className="detail-header flex align-center m-bottom-10">
                    <img src="/images/default-image-square.png" alt="product picture" width={64} height={64} />
                    <div>
                      <h4>Product Two</h4>
                      <p>Netto</p>
                      <h5>70 ml</h5>
                    </div>
                    <button className="btn btn-primary">Ubah</button>
                  </div>
                  <div className="detail-content">
                    <h5>Dose</h5>
                    <p className="m-bottom-10">2 x sehari, pagi & malam</p>
                    <h5>Instruction</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
                <div className="detail-box">
                  <div className="detail-header flex align-center m-bottom-10">
                    <img src="/images/default-image-square.png" alt="product picture" width={64} height={64} />
                    <div>
                      <h4>Product Three</h4>
                      <p>Netto</p>
                      <h5>90 ml</h5>
                    </div>
                    <button className="btn btn-primary">Ubah</button>
                  </div>
                  <div className="detail-content">
                    <h5>Dose</h5>
                    <p className="m-bottom-10">1 x sehari, malam</p>
                    <h5>Instruction</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-sidebar-box flex flex-column w-25">
              <div>
                <h2 className="m-bottom-20">#A0001</h2>
                <p>Name</p>
                <h5 className="m-bottom-10">Dian Sastrowardoyo</h5>
                <p>Birth Date</p>
                <h5 className="m-bottom-10">16 Maret 1982</h5>
                <p>Address</p>
                <h5 className="m-bottom-20">Jl. Cipete Raya No.26, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410</h5>
                <button className="btn btn-call w-100">Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
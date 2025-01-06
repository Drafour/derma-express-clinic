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
        <div className="section-home-cashier w-90 margin-auto">
          <div className="container-home-box flex">
            <div className="home-box flex flex-column w-33">
              <h4 className="box-name text-center m-bottom-10">Pembayaran Pasien</h4>
              <ul className="box-content">
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
              </ul>
            </div>
            <div className="home-box flex flex-column w-33">
              <h4 className="box-name text-center m-bottom-10">Transaksi</h4>
              <ul className="box-content secondly">
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
                <li className="m-bottom-10"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
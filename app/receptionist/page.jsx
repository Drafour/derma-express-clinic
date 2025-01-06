"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem('token'));

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
        <div className="section-home-receptionist w-90 margin-auto">
          <div className="container-home-box flex m-bottom-40">
            <div className="home-box w-33 text-center">
              <h5 className="m-bottom-10">Waiting</h5>
              <h2>10</h2>
            </div>
            <div className="home-box w-33 text-center">
              <h5 className="m-bottom-10">Canceled</h5>
              <h2>0</h2>
            </div>
            <div className="home-box w-33 text-center">
              <h5 className="m-bottom-10">End Visits</h5>
              <h2>8</h2>
            </div>
          </div>
          <table className="home-table w-100">
            <thead>
              <tr>
                <th>No.</th>
                <th>Tujuan</th>
                <th>Jumlah</th>
                <th>No. Panggil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>Counter 01</td>
                <td className="text-center">8</td>
                <td className="text-center">A0001</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>Counter 02</td>
                <td className="text-center">5</td>
                <td className="text-center">A0003</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>Counter 03</td>
                <td className="text-center">2</td>
                <td className="text-center">A0002</td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td>Counter 04</td>
                <td className="text-center">3</td>
                <td className="text-center">A0005</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
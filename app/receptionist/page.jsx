"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDashboard } from "../utils/axios";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      const token = localStorage.getItem('token');
      const type  = 'receptionist';
  
      // getDashboard(token, type).then(res => {
      //   console.log(res.data.data);

      //   var data_dashboard = res.data.data;
      //   var data_counter   = data_dashboard.counters;
      //   var total_counter  = data_counter.length;
      //   var div_html       = '';

      //   if (total_counter > 0) {

      //   }
      //   else {
      //     div_html = `<tr>
      //                   <td colspan="4" class="text-center">Belum Ada Data</td>
      //                 </tr>`;
      //   }
  
      //   $('#total-waiting').html(data_dashboard.waiting);
      //   $('#total-canceled').html(data_dashboard.canceled);
      //   $('#total-end').html(data_dashboard.end);
      //   $('.home-table tbody').html(div_html);
      //   $('.container-preloader-page').remove();
      // }).catch(err => {
      //   console.log(err.response.data);
      // });


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
              <h2 id="total-waiting">10</h2>
            </div>
            <div className="home-box w-33 text-center">
              <h5 className="m-bottom-10">Canceled</h5>
              <h2 id="total-canceled">0</h2>
            </div>
            <div className="home-box w-33 text-center">
              <h5 className="m-bottom-10">End Visits</h5>
              <h2 id="total-end">8</h2>
            </div>
          </div>
          <table className="home-table w-100">
            <thead>
              <tr>
                <th>No.</th>
                <th>Tujuan</th>
                <th>Jumlah</th>
                <th>QNo</th>
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
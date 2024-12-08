"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdmission } from "../utils/axios";

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      const token = localStorage.getItem('token');
      const order = 'desc';
      const page  = 1;
      const take  = 1;

      getAdmission(token, order, page, take).then(res => {
        console.log(res.data);

        if (res.data.statusCode == 200) {
          var data_admission  = res.data.data.data;
          var total_admission = data_admission.length;
          var div_html    = '';

          for (var i = 0; i < total_admission; ++i) {
            div_html += `<tr>
                           <td>-</td>
                           <td>` + data_admission[i].regNo + `</td>
                           <td>-</td>
                           <td>-</td>
                           <td>-</td>
                           <td>` + data_admission[i].cardCategory + `</td>
                           <td>-</td>
                           <td>` + (data_admission[i].endorseStatus ? 'Yes' : 'No') + `</td>
                           <td>` + (data_admission[i].trainingStatus ? 'Yes' : 'No') + `</td>
                           <td>` + (data_admission[i].complainStatus ? 'Yes' : 'No') + `</td>
                           <td>-</td>
                           <td>-</td>
                           <td>-</td>
                           <td>-</td>
                           <td>-</td>
                           <td>` + data_admission[i].visitType + `</td>
                           <td>-</td>
                         </tr>`;
          }

          $('#list-admission').html(div_html);
          $('.container-preloader-page').remove();
        }
      }).catch(err => {
        console.log(err);
      })
    }
  });

  return (
    <>
      <div className="page-body-wrapper">
        <div className="page-body">
          <div className="mb-8">
            <h4 className="font-black text-xl mb-2">Admission</h4>
          </div>
          <div className="section-data">
            <table className="table text-sm">
              <thead>
                <tr>
                  <th>Queue Num.</th>
                  <th>Reg Num.</th>
                  <th>Admission Old</th>
                  <th>Customer</th>
                  <th>No HP</th>
                  <th>Card Category</th>
                  <th>Doctor</th>
                  <th>Status Endorse</th>
                  <th>Status Training</th>
                  <th>Status Complain</th>
                  <th>Status VIP</th>
                  <th>User Entry</th>
                  <th>Exist in WI</th>
                  <th>New Customer</th>
                  <th>Email</th>
                  <th>Visit Type</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody id="list-admission">
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234567890</td>
                  <td>-</td>
                  <td>John Doe</td>
                  <td>081234567890</td>
                  <td>Yellow</td>
                  <td>Doctor Training 1</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                  <td>John</td>
                  <td>No</td>
                  <td>No</td>
                  <td>john.doe@email.com</td>
                  <td>New</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
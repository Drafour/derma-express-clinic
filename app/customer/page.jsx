"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCustomer } from "../utils/axios";

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

      getCustomer(token, order, page, take).then(res => {
        console.log(res.data);

        if (res.data.statusCode == 200) {
          var data_customer  = res.data.data.data;
          var total_customer = data_customer.length;
          var div_html       = '';

          for (var i = 0; i < total_customer; ++i) {
            div_html += `<tr>
                           <td>` + data_customer[i].name + `</td>
                           <td>` + data_customer[i].countryPhoneCode + '' + data_customer[i].phoneNo + `</td>
                           <td>` + data_customer[i].gender + `</td>
                           <td>` + data_customer[i].address + `</td>
                           <td>` + data_customer[i].email + `</td>
                           <td>` + data_customer[i].IdCardNo + `</td>
                           <td>-</td>
                         </tr>`;
          }

          $('#list-customer').html(div_html);
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
          <h4 className="font-black text-xl mb-2">Customer</h4>
        </div>
        <div className="section-data">
          <table className="table text-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Email</th>
                <th>Identity No.</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody id="list-customer">
              <tr>
                <td>John Doe</td>
                <td>081234567890</td>
                <td>Male</td>
                <td>Jl. Buntu No.99</td>
                <td>john.doe@email.com</td>
                <td>-</td>
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
"use client";

import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter, } from "next/navigation";
import { getAdmission } from "../../utils/axios";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      const token = localStorage.getItem('token');

      // getAdmission(token).then(res => {
      //   console.log(res.data.data);

      //   var data_admission  = res.data.data.data;
      //   var total_admission = data_admission.length;
      //   var div_html        = '';

      //   if (total_admission > 0) {
      //     for (var i = 0; i < total_admission; i++) {
      //       div_html += `<tr>
      //                      <td>` + data_admission[i].queue.number + `</td>
      //                      <td>` + data_admission[i].admissionNo + `</td>
      //                      <td>` + data_admission[i].customer.name + `</td>
      //                      <td>` + data_admission[i].cardCategory + `</td>
      //                      <td>` + data_admission[i].specialist + `</td>
      //                      <td>` + data_admission[i].doctor.name + `</td>
      //                      <td>` + (data_admission[i].trainingStatus ? 'Ya' : 'Tidak') + `</td>
      //                      <td>` + (data_admission[i].endorseStatus ? 'Ya' : 'Tidak') + `</td>
      //                      <td>` + (data_admission[i].complainStatus ? 'Ya' : 'Tidak') + `</td>
      //                      <td>Tidak</td>
      //                      <td>John Doe</td>
      //                      <td>Tidak</td>
      //                      <td>Tidak</td>
      //                      <td>` + data_admission[i].customer.email + `</td>
      //                      <td>` + data_admission[i].visitType + `</td>
      //                      <td className="text-center">
      //                        <a href="/receptionist/admission/edit-admission?id=` + data_admission[i].id + `">
      //                          <img alt="edit" title="Edit Admission" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" style="color:transparent" src="/images/icon-edit.svg">
      //                        </a>
      //                      </td>
      //                    </tr>`;
      //     }

      //     $('#content-admission').html(div_html);
      //     $('.container-preloader-page').remove();
      //   }
      //   else {

      //   }
      // }).catch(err => {
      //   console.log(err.response.data);
      // });

      $('.container-preloader-page').remove();
    }
  });

  return (
    <div>
      <div className="container-body transition">
        <div className="section-admission-list w-90 margin-auto">
          <div className="container-filter flex m-bottom-20">
            <div className="w-50">
              <div className="content-filter flex align-center m-bottom-5">
                <label htmlFor="filter-date-from">Date From<span>:</span></label>
                <input type="date" className="w-50" id="filter-date-from" autoComplete="off" />
              </div>
              <div className="content-filter flex align-center">
                <label htmlFor="filter-date-to">Date To<span>:</span></label>
                <input type="date" className="w-50" id="filter-date-to" autoComplete="off" />
              </div>
            </div>
            <div className="w-50">
              <div className="content-filter flex justify-content-end align-center m-bottom-5">
                <label htmlFor="filter-search">Search<span>:</span></label>
                <input type="text" className="w-50" id="filter-search" autoComplete="off" />
              </div>
              <div className="content-filter flex justify-content-end align-center">
                <label htmlFor="filter-order">Order by<span>:</span></label>
                <select id="filter-order" className="w-30">
                  <option value="name">QNo</option>
                  <option value="email">RegNo</option>
                  <option value="type">Customer</option>
                  <option value="status">Card</option>
                  <option value="status">Specialist</option>
                  <option value="status">Doctor</option>
                  <option value="status">Email</option>
                  <option value="status">Visit Type</option>
                  <option value="date_created">Date Created</option>
                </select>
                <select id="filter-order-type" className="w-20">
                  <option value="desc">DESC</option>
                  <option value="asc">ASC</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container-table">
            <table className="w-100">
              <thead>
                <tr>
                  <th>QNo</th>
                  <th>RegNo</th>
                  <th>Customer</th>
                  <th>Card</th>
                  <th>Specialist</th>
                  <th>Doctor</th>
                  <th>Training</th>
                  <th>Endorse</th>
                  <th>Complain</th>
                  <th>VIP</th>
                  <th>User Entry</th>
                  <th>Exist in WI</th>
                  <th>New Customer</th>
                  <th>Email</th>
                  <th>Visit Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="content-admission">
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
                <tr>
                  <td>A0001</td>
                  <td>ADM.1234.5678.90</td>
                  <td>Dian Sastrowardoyo</td>
                  <td>Blue</td>
                  <td>Treatment</td>
                  <td>dr. Deffina Widjanarko</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>John Doe</td>
                  <td>Tidak</td>
                  <td>Tidak</td>
                  <td>diansastrowardoyo@gmail.com</td>
                  <td>New</td>
                  <td className="text-center"><Link href="/receptionist/admission/edit-admission"><Image src="/images/icon-edit.svg" alt="calendar" title="Edit Admission" width={18} height={18} /></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
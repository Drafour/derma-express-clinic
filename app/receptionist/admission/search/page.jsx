"use client";

import $ from "jquery";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchCustomer } from "../../../utils/axios";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  // const queueId = params.get('id');

  var submit_status = 0;

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      $('.container-preloader-page').remove();
    }
  });

  useEffect(() => {
    $('#input-patient').on('keyup', function(){
      var keyword = $('#input-patient').val();

      if (keyword.length > 2) {
        $('.dropdown-search .dropdown-content').removeClass('hidden');
        
        searchCustomerSubmit(keyword);
      }
      else {
        $('.dropdown-search .dropdown-content').addClass('hidden');
      }
    });

    // to prevent leak memory unsubscribe from event on unmount
    return () => {
      $('#input-patient').off('keyup');
    }
  });

  const searchCustomerSubmit = async (keyword) => {
    if (submit_status == 0) {
      const token  = localStorage.getItem('token');
      const filter = keyword;

      submit_status = 1;

      searchCustomer(token, filter).then(res => {
        console.log(res.data);

        submit_status = 0;

        if (res.data.statusCode == 200) {
          var data_patient  = res.data.data.data;
          var total_patient = data_patient.length;
          var div_html      = '';

          if (total_patient > 0) {
            for (var i = 0; i < total_patient; i++) {
              // div_html += `<li><a href="/receptionist/admission/new-admission?id1=` + queueId + `&id2=` + data_patient[i].id + `">` + data_patient[i].name + `</a></li>`;
              div_html += `<li><a href="/receptionist/admission/new-admission</a></li>`;
            }

            // div_html += `<li><a href="/receptionist/admission/add-patient?id=` + queueId + `" class="add-new">+ Tambah Baru</a></li>`;
            div_html += `<li><a href="/receptionist/admission/add-patient" class="add-new">+ Tambah Baru</a></li>`;
          }
          else {
            // div_html += `<li><span>Pasien tidak ditemukan.</span></li>
            //              <li><a href="/receptionist/admission/add-patient?id=` + queueId + `" class="add-new">+ Tambah Baru</a></li>`;
            div_html += `<li><span>Pasien tidak ditemukan.</span></li>
                        <li><a href="/receptionist/admission/add-patient" class="add-new">+ Tambah Baru</a></li>`;
          }

          $('.dropdown-search .dropdown-content').html(div_html);
        }
      }).catch(err => {
        console.log(err.response.data);

        submit_status = 0;
      });
    }
  }

  return (
    <Suspense>
      <div>
        <div className="container-body transition">
          <div className="section-admission-search text-center w-50 margin-auto">
            <h2>Cari Data Pasien</h2>
            <p>Cari data pasien berdasarkan nama, Nomor HP atau Nomor KTP.</p>
            <div className="flex flex-column dropdown-search">
              <label className="m-bottom-5" htmlFor="input-patient">Name / Phone / ID</label>
              <input type="text" id="input-patient" autoComplete="off" />
              <ul className="dropdown-content hidden"></ul>
            </div>
            {/* <div>
              <a href="/receptionist/admission/patient-details" className="btn btn-primary">Search</a>
              <a href="/receptionist/admission/add-patient" className="btn btn-secondary-fill">Add</a>
            </div> */}
          </div>
        </div>
      </div>
    </Suspense>
  )
}
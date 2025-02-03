"use client";

import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCustomerById } from "../../../utils/axios";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  const queueId    = params.get('id1');
  const customerId = params.get('id2');

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      if (customerId) {
        const token = localStorage.getItem('token');

        getCustomerById(token, customerId).then(res => {
          console.log(res.data.data);

          var data_patient   = res.data.data;
          var initial_name   = getInitialName(data_patient.name);
          var patient_age    = calculateAge(data_patient.dateOfBirth);
          var patient_header = `<div class="patient-picture"><span>` + initial_name + `</span></div>
                                <div class="patient-name">
                                  <h4>` + data_patient.name + `</h4>
                                  <p>Reguler</p>
                                </div>`;

          $('.section-patient-details-header .header-left').html(patient_header);
          $('#patient-id').html(data_patient.id);
          $('#patient-id-type').html(data_patient.IdType);
          $('#patient-id-card-number').html(data_patient.IdCardNo);
          $('#patient-phone-number').html('+' + data_patient.countryPhoneCode + ' ' + data_patient.phoneNo);
          $('#patient-address').html(data_patient.address);
          $('#patient-gender').html(data_patient.gender);
          $('#patient-age').html(patient_age);
          $('.container-preloader-page').remove();
        }).catch(err => {
          console.log(err.response.data);
        });
      }
      else {
        $('.container-preloader-page').remove();
      }
    }
  });

  const getInitialName = (name) => {
    var matches = name.match(/\b(\w)/g);

    return matches.join('');
  }

  const calculateAge = (date) => {
    var dob   = new Date(date);
    var today = new Date();

    return Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-patient-details-header">
          <div className="flex align-center w-90 margin-auto">
            <div className="header-left flex align-center">
              <div className="patient-picture"><span>DS</span></div>
              <div className="patient-name">
                {/* <p>DM89006076</p> */}
                <h4>Dian Sastrowardoyo</h4>
                <p>Reguler</p>
              </div>
            </div>
            {/* <div className="header-right align-center">
              <Link href="/receptionist/admission/new-admission" className="btn btn-secondary-fill">New Admission</Link>
              <Link href="/receptionist/admission/reschedule" className="btn btn-secondary-fill">Reschedule</Link>
              <Link href="/receptionist/admission/new-reschedule" className="btn btn-secondary-fill">New & Reschedule</Link>
              <a href="#" className="btn btn-secondary-fill">Return / Complain</a>
            </div> */}
          </div>
        </div>
        <div className="section-patient-details-body">
          <div className="flex flex-column w-90 margin-auto">
            <div className="flex m-bottom-20">
              <div>
                <p>Last Visit</p>
                <h5 className="flex align-center">
                  <Image src="/images/icon-calendar.svg" alt="calendar" width={18} height={18} /> 14 November 2024
                </h5>
              </div>
              <div>
                <p>Total</p>
                <h5 className="flex align-center">
                  <Image src="/images/icon-time-forward.svg" alt="time forward" width={18} height={18} /> 12 Visit <a href="#">History</a>
                </h5>
              </div>
              <div>
                <p>Klinik</p>
                <h5 className="flex align-center">
                  <Image src="/images/icon-map-marker.svg" alt="map marker" width={18} height={18} /> Derma Express Depok
                </h5>
              </div>
              <div>
                <p>Dokter</p>
                <h5 className="flex align-center">
                  <Image src="/images/icon-medical.svg" alt="medical" width={18} height={18} /> dr. Deffina Widjanarko
                </h5>
              </div>
            </div>
            <div className="m-bottom-20">
              <p>Customer ID</p>
              <h5 id="patient-id">DM89006076</h5>
            </div>
            <div className="flex m-bottom-20">
              <div>
                <p>ID Type</p>
                <h5 id="patient-id-type">KTP</h5>
              </div>
              <div>
                <p>ID Card Number</p>
                <h5 id="patient-id-card-number">1234567890</h5>
              </div>
            </div>
            <div className="m-bottom-20">
              <p>Phone Number</p>
              <h5 id="patient-phone-number">+62 81234567890</h5>
            </div>
            <div className="m-bottom-20">
              <p>Address</p>
              <h5 id="patient-address">Jl. Kutilang No.49, Jakarta</h5>
            </div>
            <div className="flex m-bottom-20">
              <div>
                <p>Gender</p>
                <h5 id="patient-gender">Female</h5>
              </div>
              <div>
                <p>Age</p>
                <h5 id="patient-age">17</h5>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div>
                <p>Training</p>
                <select id="patient-id-type">
                  <option value="Tidak">Tidak</option>
                  <option value="Ya">Ya</option>
                </select>
              </div>
              <div>
                <p>Endorse</p>
                <select id="patient-id-type">
                  <option value="Tidak">Tidak</option>
                  <option value="Ya">Ya</option>
                </select>
              </div>
              <div>
                <p>Complain</p>
                <select id="patient-id-type">
                  <option value="Tidak">Tidak</option>
                  <option value="Ya">Ya</option>
                </select>
              </div>
              <div>
                <p>Card</p>
                <select id="patient-id-type">
                  <option value=""></option>
                  <option value="Yellow">Yellow</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>
            </div>
            <div className="m-bottom-20">
              <p>Visit Type</p>
              <h5>Reguler</h5>
            </div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <Link href="/receptionist/admission/consultation-room-monitoring" className="btn btn-primary">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client";

import $ from "jquery";
import Image from "next/image";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAdmissionById, getDoctors, editAdmission } from "../../../utils/axios";
import GlobalVariable from "../../../globals.js";

export default function Page() {
  const router = useRouter();
  // const params = useSearchParams();

  // const admissionId = params.get('id');

  var submit_status = 0;
  var queueId;
  var customerId;

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      // if (admissionId) {
      //   const token = localStorage.getItem('token');

      //   getAdmissionById(token, admissionId).then(res_1 => {
      //     console.log(res_1.data.data.data);

      //     var data_admission = res_1.data.data.data;

      //     var queue_number   = data_admission.queue.number;
      //     var data_patient   = data_admission.customer;
      //     var initial_name   = getInitialName(data_patient.name);
      //     var patient_age    = calculateAge(data_patient.dateOfBirth);
      //     var patient_header = `<div class="patient-picture"><span>` + initial_name + `</span></div>
      //                           <div class="patient-name">
      //                             <h4>` + data_patient.name + `</h4>
      //                             <p>Reguler</p>
      //                           </div>`;

      //     queueId    = data_admission.queueId;
      //     customerId = data_admission.customerId;

      //     getDoctors(token).then(res_2 => {
      //       console.log(res_2.data.data.data);

      //       var data_doctor  = res_2.data.data.data;
      //       var total_doctor = data_doctor.length;
      //       var div_html     = '<option value=""></option>';
  
      //       if (total_doctor > 0) {
      //         for (var i = 0; i < total_doctor; i++) {
      //           div_html += `<option value="` + data_doctor[i].id + `">` + data_doctor[i].name + `</option>`;
      //         }
      //       }

      //       $('#patient-doctors').html(div_html);
      //       $('#patient-doctors').val(data_admission.doctorId);
      //     }).catch(err_2 => {
      //       console.log(err_2.response.data);
      //     });

      //     $('.section-patient-details-header .header-left').html(patient_header);
      //     $('#patient-last-visit span').html('-');
      //     $('#patient-total-visit span').html('-');
      //     $('#patient-last-clinic span').html('-');
      //     $('#patient-last-doctor span').html('-');
      //     $('#patient-queue').html(queue_number);
      //     $('#patient-id').html(data_patient.id);
      //     $('#patient-id-type').html(data_patient.IdType);
      //     $('#patient-id-card-number').html(data_patient.IdCardNo);
      //     $('#patient-phone-number').html('+' + data_patient.countryPhoneCode + ' ' + data_patient.phoneNo);
      //     $('#patient-address').html(data_patient.address);
      //     $('#patient-gender').html(data_patient.gender);
      //     $('#patient-age').html(patient_age);
      //     $('#patient-training').val(data_admission.trainingStatus ? 'true' : 'false');
      //     $('#patient-endorse').val(data_admission.endorseStatus ? 'true' : 'false');
      //     $('#patient-complain').val(data_admission.complainStatus ? 'true' : 'false');
      //     $('#patient-card').val(data_admission.cardCategory);
      //     $('.visit-type').filter('[value=' + data_admission.visitType + ']').prop('checked', true);
      //     $('.specialist').filter('[value=' + data_admission.specialist + ']').prop('checked', true);
      //     $('.container-preloader-page').remove();
      //   }).catch(err_1 => {
      //     console.log(err_1.response.data);
      //   });
      // }
      // else {
      //   $('.container-preloader-page').remove();
      // }


      $('.container-preloader-page').remove();
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

  const editPatient = () => {
    // router.push('/receptionist/admission/edit-patient?id1=' + queueId + '&id2=' + customerId + '&b=true');
    router.push('/receptionist/admission/edit-patient');
  }

  const editAdmissionSubmit = () => {
    if (submit_status == 0) {
      const token          = localStorage.getItem('token');
      const clinicId       = GlobalVariable.clinicId;
      const doctorId       = $('#patient-doctors').val();
      const visitType      = $('.visit-type:checked').val();
      const date           = new Date();
      const specialist     = $('.specialist:checked').val();
      const trainingStatus = $('#patient-training').val() == 'true' ? true : false;
      const endorseStatus  = $('#patient-endorse').val() == 'true' ? true : false;
      const complainStatus = $('#patient-complain').val() == 'true' ? true : false;
      const cardCategory   = $('#patient-card').val();

      $('.error-input').html('');
      $('.result-process').removeClass('error-input success-input');

      if (cardCategory == '') {
        $('#patient-card').focus();
        $('#patient-card').next('.error-input').html('Card tidak boleh kosong!');
      }
      else if (doctorId == '') {
        $('#patient-doctors').focus();
        $('#patient-doctors').next('.error-input').html('Doctor tidak boleh kosong!');
      }
      else {
        submit_status = 1;

        $('.btn-edit-patient, #patient-training, #patient-endorse, #patient-complain, #patient-card, .visit-type, .specialist, #patient-doctors').prop('disabled', true);
        $('.btn-edit-admission').html('<div class="spinner"></div>');
        
        // editAdmission(token, admissionId, {clinicId, customerId, queueId, doctorId, visitType, date, specialist, trainingStatus, endorseStatus, complainStatus, cardCategory}).then(res => {
        //   console.log(res.data);

        //   submit_status = 0;
    
        //   $('.btn-edit-patient, #patient-training, #patient-endorse, #patient-complain, #patient-card, .visit-type, .specialist, #patient-doctors').prop('disabled', false);
        //   $('.btn-edit-admission').html('Next');

        //   if (res.data.statusCode == 200) {
        //     $('.result-process').addClass('success-input').html('Admission berhasil diubah.');

        //     setTimeout(function(){
        //       router.back();
        //     }, 3000);
        //   }
        //   else {
        //     $('.result-process').addClass('error-input').html('Terjadi kesalahan. Silahkan coba lagi nanti.');
        //   }
        // }).catch(err => {
        //   console.log(err.response.data);

        //   submit_status = 0;
    
        //   $('.btn-edit-patient, #patient-training, #patient-endorse, #patient-complain, #patient-card, .visit-type, .specialist, #patient-doctors').prop('disabled', false);
        //   $('.btn-edit-admission').html('Next');
        // });


        setTimeout(function(){
          $('.btn-edit-admission').html('Next');
          $('.result-process').addClass('success-input').html('Admission berhasil diubah.');

          setTimeout(function(){
            router.push('/receptionist/admission');
          }, 3000);
        }, 3000);
      }
    }
  }

  return (
    <Suspense>
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
              <div className="header-right align-center">
                <button className="btn btn-secondary-fill btn-edit-patient" onClick={() => editPatient()}>Edit</button>
                {/* <Link href="/receptionist/admission/new-admission" className="btn btn-secondary-fill">New Admission</Link>
                <Link href="/receptionist/admission/reschedule" className="btn btn-secondary-fill">Reschedule</Link>
                <Link href="/receptionist/admission/new-reschedule" className="btn btn-secondary-fill">New & Reschedule</Link>
                <a href="#" className="btn btn-secondary-fill">Return / Complain</a> */}
              </div>
            </div>
          </div>
          <div className="section-patient-details-body">
            <div className="flex flex-column w-90 margin-auto">
              <div className="flex m-bottom-20">
                <div className="w-25">
                  <p>Last Visit</p>
                  <h5 className="flex align-center" id="patient-last-visit">
                    <Image src="/images/icon-calendar.svg" alt="calendar" width={18} height={18} /> <span>14 November 2024</span>
                  </h5>
                </div>
                <div className="w-25">
                  <p>Total</p>
                  <h5 className="flex align-center" id="patient-total-visit">
                    <Image src="/images/icon-time-forward.svg" alt="time forward" width={18} height={18} /> <span>12 Visit <a href="#">History</a></span>
                  </h5>
                </div>
                <div className="w-25">
                  <p>Klinik</p>
                  <h5 className="flex align-center" id="patient-last-clinic">
                    <Image src="/images/icon-map-marker.svg" alt="map marker" width={18} height={18} /> <span>Derma Express Depok</span>
                  </h5>
                </div>
                <div className="w-25">
                  <p>Dokter</p>
                  <h5 className="flex align-center" id="patient-last-doctor">
                    <Image src="/images/icon-medical.svg" alt="medical" width={18} height={18} /> <span>dr. Deffina Widjanarko</span>
                  </h5>
                </div>
              </div>
              <div className="m-bottom-20">
                <p>Queue Number</p>
                <h5 id="patient-queue">A0001</h5>
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
                <div className="w-25">
                  <p>Training</p>
                  <select id="patient-training">
                    <option value="false">Tidak</option>
                    <option value="true">Ya</option>
                  </select>
                </div>
                <div className="w-25">
                  <p>Endorse</p>
                  <select id="patient-endorse">
                    <option value="false">Tidak</option>
                    <option value="true">Ya</option>
                  </select>
                </div>
                <div className="w-25">
                  <p>Complain</p>
                  <select id="patient-complain">
                    <option value="false">Tidak</option>
                    <option value="true">Ya</option>
                  </select>
                </div>
                <div className="w-25">
                  <p>Card</p>
                  <select id="patient-card">
                    <option value=""></option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                  </select>
                  <span className="error-input"></span>
                </div>
              </div>
              <div className="flex m-bottom-20">
                <div>
                  <p>Visit Type</p>
                  <div>
                    <input type="radio" className="visit-type" name="visit-type" value="New" id="visit-type-new" defaultChecked />
                    <label htmlFor="visit-type-new">New</label>
                  </div>
                </div>
                <div>
                  <p></p>
                  <div>
                    <input type="radio" className="visit-type" name="visit-type" value="Reschedule" id="visit-type-reschedule" />
                    <label htmlFor="visit-type-reschedule">Reschedule</label>
                  </div>
                </div>
                <div>
                  <p></p>
                  <div>
                    <input type="radio" className="visit-type" name="visit-type" value="New_Reschedule" id="visit-type-new-reschedule" />
                    <label htmlFor="visit-type-new-reschedule">New & Reschedule</label>
                  </div>
                </div>
              </div>
              <div className="flex m-bottom-20">
                <div>
                  <p>Specialist</p>
                  <div>
                    <input type="radio" className="specialist" name="specialist" value="Treatment" id="specialist-treatment" defaultChecked />
                    <label htmlFor="specialist-treatment">Treatment</label>
                  </div>
                </div>
                <div>
                  <p></p>
                  <div>
                    <input type="radio" className="specialist" name="specialist" value="Pharmacy" id="specialist-pharmacy" />
                    <label htmlFor="specialist-pharmacy">Pharmacy</label>
                  </div>
                </div>
              </div>
              <div className="flex m-bottom-20">
                <div>
                  <p>Doctor</p>
                  <select id="patient-doctors">
                    <option value=""></option>
                    <option value="doctor_a">dr. Deffina Widjanarko</option>
                    <option value="doctor_b">Dr. Stephen Strange</option>
                    <option value="doctor_c">dr. Maria Utami</option>
                  </select>
                  <span className="error-input"></span>
                </div>
              </div>
              <div className="m-top-20 result-process text-center"></div>
            </div>
          </div>
          <div className="section-patient-details-footer">
            <div className="flex align-center justify-content-center w-90 margin-auto">
              {/* <button href="/receptionist/admission/consultation-room-monitoring" className="btn btn-primary" onClick={() => editCustomerSubmit()}>Next</button> */}
              <button className="btn btn-primary btn-edit-admission" onClick={() => editAdmissionSubmit()}>Simpan</button>
              <button className="btn btn-primary-outline btn-cancel-admission">Batal</button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
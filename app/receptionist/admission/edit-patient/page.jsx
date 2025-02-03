"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCustomerById, getCountry, getProvince, getRegency, editCustomer } from "../../../utils/axios";
import GlobalVariable from "../../../globals.js";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  // const queueId    = params.get('id1');
  // const customerId = params.get('id2');

  var submit_status = 0;
  var country_id    = 0;

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      $('.container-preloader-page').remove();

      const token = localStorage.getItem('token');

      // getCustomerById(token, customerId).then(res_1 => {
      //   console.log(res_1.data.data);

      //   var data_patient = res_1.data.data;

      //   country_id = data_patient.countryId;

      //   getCountry(token).then(res_2 => {
      //     console.log(res_2.data);

      //     var data_country  = res_2.data.data.data;
      //     var total_country = data_country.length;
      //     var div_html      = `<option value=""></option>`;

      //     for (var i = 0; i < total_country; i++) {
      //       div_html += `<option value="` + data_country[i].id + `" id="country-` + data_country[i].id + `" data-phone-code="` + data_country[i].phonecode + `">` + data_country[i].name + `</option>`;
      //     }

      //     $('#patient-country').html(div_html);
      //     // $('#patient-province').html('').prop('disabled', false);
      //     // $('#patient-city').html('').prop('disabled', false);

      //     getProvincePatient(data_patient.provinceId, data_patient.cityId);

      //     $('#patient-full-name').val(data_patient.name);
      //     $('#patient-alias-name').val(data_patient.aliasName);
      //     $('#patient-gender').val(data_patient.gender);
      //     $('#patient-id-type').val(data_patient.IdType);
      //     $('#patient-id-card-number').val(data_patient.IdCardNo);
      //     $('#patient-place-birth').val(data_patient.placeOfBirth);
      //     $('#patient-date-birth').val(data_patient.dateOfBirth);
      //     $('#patient-address').val(data_patient.address);
      //     $('#patient-country').val(country_id);
      //     // $('#patient-city').val(data_patient.cityId);
      //     $('#patient-phone-number').val(data_patient.phoneNo);
      //     $('#patient-email').val(data_patient.email);
      //     $('#patient-reference').val(data_patient.reference);
      //     $('#patient-customer-status').val(data_patient.customerStatus);
      //     $('#patient-active-status').val(data_patient.activeStatus ? 'active' : 'inactive');
      //   }).catch(err_2 => {
      //     console.log(err_2.response.data);
      //   });
      // }).catch(err_1 => {
      //   console.log(err_1.response.data);
      // });
      

      getCountry(token).then(res => {
        console.log(res.data);

        var data_country  = res.data.data.data;
        var total_country = data_country.length;
        var div_html      = `<option value=""></option>`;

        for (var i = 0; i < total_country; i++) {
          div_html += `<option value="` + data_country[i].id + `" id="country-` + data_country[i].id + `" data-phone-code="` + data_country[i].phonecode + `">` + data_country[i].name + `</option>`;
        }

        $('#patient-country').html(div_html);
        $('#patient-province').html('').prop('disabled', true);
        $('#patient-city').html('').prop('disabled', true);
      }).catch(err => {
        console.log(err.response.data);
      });
    }
  });

  useEffect(() => {
    $('#patient-country').on('change', function(){
      country_id = this.value;

      getProvincePatient();
    });

    $('#patient-province').on('change', function(){
      const provinceId = this.value;

      getCityPatient(provinceId);
    });

    $('#patient-phone-number').on('keydown', function(e){
      // Allow: backspace, delete, tab, escape, and f5
      if ($.inArray(e.keyCode, [8, 46, 9, 27, 116]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl+C, Command+C
        (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl+V, Command+V
        (e.keyCode === 86 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl+X, Command+X
        (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });

    $('#patient-phone-number').on('keyup', function(){
      var value = $('#patient-phone-number').val().replace(/^0+/, '');

      $('#patient-phone-number').val(value);
    });

    $('#patient-phone-number').on('paste', function(){
      setTimeout(function(){
        var value = $('#patient-phone-number').val().replace(/^0+/, '');

        $('#patient-phone-number').val(value);
      });
    });

    // to prevent leak memory unsubscribe from event on unmount
    return () => {
      $('#patient-country').off('change');
      $('#patient-province').off('change');
      $('#patient-phone-number').off('keyup');
      $('#patient-phone-number').off('paste');
    }
  });

  const getProvincePatient = (provinceId=false, cityId=false) => {
    var phone_code = $('#country-' + country_id).attr('data-phone-code');

    $('#patient-country-phone-code').val(phone_code);

    const token     = localStorage.getItem('token');
    const countryId = country_id;

    getProvince(token, countryId).then(res => {
      console.log(res.data);

      var data_province  = res.data.data.data;
      var total_province = data_province.length;
      var div_html       = `<option value=""></option>`;

      for (var i = 0; i < total_province; i++) {
        div_html += `<option value="` + data_province[i].id + `">` + data_province[i].name + `</option>`;
      }

      $('#patient-province').html(div_html).prop('disabled', false);
      $('#patient-city').html('').prop('disabled', true);

      if (provinceId) {
        $('#patient-province').val(provinceId);

        getCityPatient(provinceId, cityId);
      }
    }).catch(err => {
      console.log(err.response.data);
    });
  }

  const getCityPatient = (provinceId, cityId=false) => {
    const token      = localStorage.getItem('token');
    const countryId  = country_id;
    // const provinceId = this.value;

    getRegency(token, countryId, provinceId).then(res => {
      console.log(res.data);

      var data_city  = res.data.data.data;
      var total_city = data_city.length;
      var div_html       = `<option value=""></option>`;

      for (var i = 0; i < total_city; i++) {
        div_html += `<option value="` + data_city[i].id + `">` + data_city[i].name + `</option>`;
      }

      $('#patient-city').html(div_html).prop('disabled', false);

      if (provinceId && cityId) {
        $('#patient-city').val(cityId);
      }
    }).catch(err => {
      console.log(err.response.data);
    });
  }

  const editCustomerSubmit = async () => {
    if (submit_status == 0) {
      const token            = localStorage.getItem('token');
      const clinicId         = GlobalVariable.clinicId;
      const name             = $('#patient-full-name').val();
      const aliasName        = $('#patient-alias-name').val();
      const gender           = $('#patient-gender').val();
      const IdType           = $('#patient-id-type').val();
      const IdCardNo         = $('#patient-id-card-number').val();
      const placeOfBirth     = $('#patient-place-birth').val();
      const dateOfBirth      = $('#patient-date-birth').val();
      const address          = $('#patient-address').val();
      const countryId        = $('#patient-country').val();
      const provinceId       = $('#patient-province').val();
      const cityId           = $('#patient-city').val();
      const countryPhoneCode = $('#patient-country-phone-code').val();
      const phoneNo          = $('#patient-phone-number').val().replace(/^0+/, '');
      const email            = $('#patient-email').val();
      const reference        = $('#patient-reference').val();
      const customerStatus   = $('#patient-customer-status').val();

      var activeStatus = $('#patient-active-status').val();

      $('.error-input').html('');
      $('.result-process').removeClass('error-input success-input');

      if (name == '') {
        $('#patient-full-name').focus();
        $('#patient-full-name').next('.error-input').html('Customer name tidak boleh kosong!');
      }
      else if (aliasName == '') {
        $('#patient-alias-name').focus();
        $('#patient-alias-name').next('.error-input').html('Alias name tidak boleh kosong!');
      }
      else if (gender == '') {
        $('#patient-gender').focus();
        $('#patient-gender').next('.error-input').html('Gender tidak boleh kosong!');
      }
      else if (IdType == '') {
        $('#patient-id-type').focus();
        $('#patient-id-type').next('.error-input').html('ID type tidak boleh kosong!');
      }
      else if (IdCardNo == '') {
        $('#patient-id-card-number').focus();
        $('#patient-id-card-number').next('.error-input').html('ID card number tidak boleh kosong!');
      }
      else if (placeOfBirth == '') {
        $('#patient-place-birth').focus();
        $('#patient-place-birth').next('.error-input').html('Place of birth tidak boleh kosong!');
      }
      else if (dateOfBirth == '') {
        $('#patient-date-birth').focus();
        $('#patient-date-birth').next('.error-input').html('Date of birth tidak boleh kosong!');
      }
      else if (address == '') {
        $('#patient-address').focus();
        $('#patient-address').next('.error-input').html('Address tidak boleh kosong!');
      }
      else if (countryId == '') {
        $('#patient-country').focus();
        $('#patient-country').next('.error-input').html('Country tidak boleh kosong!');
      }
      else if (provinceId == '') {
        $('#patient-province').focus();
        $('#patient-province').next('.error-input').html('Province tidak boleh kosong!');
      }
      else if (cityId == '') {
        $('#patient-city').focus();
        $('#patient-city').next('.error-input').html('City tidak boleh kosong!');
      }
      else if (countryPhoneCode == '') {
        $('#patient-country-phone-code').focus();
        $('#patient-country-phone-code').next('.error-input').html('Country phone code tidak boleh kosong!');
      }
      else if (phoneNo == '') {
        $('#patient-phone-number').focus();
        $('#patient-phone-number').next('.error-input').html('Phone number tidak boleh kosong!');
      }
      else if (email == '') {
        $('#patient-email').focus();
        $('#patient-email').next('.error-input').html('Email tidak boleh kosong!');
      }
      else if (!checkEmail(email)) {
        $('#patient-email').focus();
        $('#patient-email').next('.error-input').html('Format email salah!');
      }
      else if (reference == '') {
        $('#patient-reference').focus();
        $('#patient-reference').next('.error-input').html('Reference tidak boleh kosong!');
      }
      else if (customerStatus == '') {
        $('#patient-customer-status').focus();
        $('#patient-customer-status').next('.error-input').html('Customer status tidak boleh kosong!');
      }
      else if (activeStatus == '') {
        $('#patient-active-status').focus();
        $('#patient-active-status').next('.error-input').html('Active status tidak boleh kosong!');
      }
      else {
        submit_status = 1;

        activeStatus = activeStatus == 'active' ? true : false;

        $('#patient-full-name, #patient-alias-name, #patient-gender, #patient-id-type, #patient-id-card-number, #patient-place-birth, #patient-date-birth, #patient-address, #patient-country, #patient-province, #patient-city, #patient-country-phone-code, #patient-phone-number, #patient-email, #patient-reference, #patient-customer-status, #patient-active-status').prop('disabled', true);
        $('.btn-edit-customer').html('<div class="spinner"></div>');

        // editCustomer(token, customerId, {clinicId, name, aliasName, gender, IdType, IdCardNo, placeOfBirth, dateOfBirth, address, countryId, provinceId, cityId, countryPhoneCode, phoneNo, email, reference, customerStatus, activeStatus}).then(res => {
        //   console.log(res.data);

        //   submit_status = 0;
          
        //   $('#patient-full-name, #patient-alias-name, #patient-gender, #patient-id-type, #patient-id-card-number, #patient-place-birth, #patient-date-birth, #patient-address, #patient-country, #patient-province, #patient-city, #patient-country-phone-code, #patient-phone-number, #patient-email, #patient-reference, #patient-customer-status, #patient-active-status').prop('disabled', false);
        //   $('.btn-edit-customer').html('Next');

        //   if (res.data.statusCode == 200) {
        //     $('.result-process').addClass('success-input').html('Customer berhasil diubah.');

        //     setTimeout(function(){
        //       if (params.get('b') && params.get('b') == 'true') {
        //         router.back();
        //       }
        //       else {
        //         router.push('/receptionist/admission/new-admission?id1=' + queueId + '&id2=' + res.data.data.id);
        //       }
        //     }, 3000);
        //   }
        //   else {
        //     $('.result-process').addClass('error-input').html('Terjadi kesalahan. Silahkan coba lagi nanti.');
        //   }
        // }).catch(err => {
        //   console.log(err.response.data);

        //   submit_status = 0;
    
        //   $('#patient-full-name, #patient-alias-name, #patient-gender, #patient-id-type, #patient-id-card-number, #patient-place-birth, #patient-date-birth, #patient-address, #patient-country, #patient-province, #patient-city, #patient-country-phone-code, #patient-phone-number, #patient-email, #patient-reference, #patient-customer-status, #patient-active-status').prop('disabled', false);
        //   $('.btn-edit-customer').html('Next');
        //   $('.result-process').addClass('error-input').html(`${err.response.data.message}`);
        // });


        setTimeout(function(){
          $('.btn-edit-customer').html('Next');
          $('.result-process').addClass('success-input').html('Customer berhasil diubah.');

          setTimeout(function(){
            router.push('/receptionist/admission/new-admission');
          }, 3000);
        }, 3000);
      }
    }
  }

  const checkEmail = (email) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(email);
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-add-patient">
          <div className="flex flex-column w-70 margin-auto">
            <div className="flex m-bottom-20">
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-full-name">Customer Name</label>
                <input type="text" id="patient-full-name" autoComplete="off" />
                <span className="error-input"></span>
              </div>
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-alias-name">Alias Name</label>
                <input type="text" id="patient-alias-name" autoComplete="off" />
                <span className="error-input"></span>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-gender">Gender</label>
                <select id="patient-gender">
                  <option value=""></option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
                <span className="error-input"></span>
              </div>
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-id-type">ID Type</label>
                <select id="patient-id-type">
                  <option value=""></option>
                  <option value="KTP">KTP</option>
                  <option value="Passport">Passport</option>
                </select>
                <span className="error-input"></span>
              </div>
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-id-card-number">ID Card Number</label>
                <input type="text" id="patient-id-card-number" autoComplete="off" />
                <span className="error-input"></span>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-place-birth">Place of Birth</label>
                <input type="text" id="patient-place-birth" autoComplete="off" />
                <span className="error-input"></span>
              </div>
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-date-birth">Date of Birth</label>
                <input type="date" id="patient-date-birth" autoComplete="off" />
                <span className="error-input"></span>
              </div>
            </div>
            <div className="m-bottom-20">
              <label className="m-bottom-5" htmlFor="patient-address">Address</label>
              <textarea id="patient-address" rows="4"></textarea>
              <span className="error-input"></span>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-country">Country</label>
                <select id="patient-country"></select>
                <span className="error-input"></span>
              </div>
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-province">Province</label>
                <select id="patient-province" disabled></select>
                <span className="error-input"></span>
              </div>
              <div className="w-33">
                <label className="m-bottom-5" htmlFor="patient-city">City</label>
                <select id="patient-city" disabled></select>
                <span className="error-input"></span>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-country-phone-code">Country Phone Code</label>
                <input type="text" id="patient-country-phone-code" autoComplete="off" disabled />
                <span className="error-input"></span>
              </div>
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-phone-number">Phone Number</label>
                <input type="text" id="patient-phone-number" autoComplete="off" />
                <span className="error-input"></span>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-email">Email</label>
                <input type="email" id="patient-email" autoComplete="off" />
                <span className="error-input"></span>
              </div>
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-reference">Reference</label>
                <select id="patient-reference">
                  <option value=""></option>
                  <option value="Teman/Keluarga">Teman/Keluarga</option>
                  <option value="Instagram_Derma_Express">Instagram Derma Express</option>
                  <option value="Instagram_Klinik">Instagram Klinik</option>
                  <option value="Domisili">Domisili</option>
                  <option value="TikTok_dr._Angelia">TikTok dr. Angelia</option>
                  <option value="TikTok_Derma_Express">TikTok Derma Express</option>
                  <option value="TikTok_Klinik_Lokal">TikTok Klinik Lokal</option>
                  <option value="Billboard">Billboard</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google">Google</option>
                  <option value="Lain-Lain">Lain-Lain</option>
                </select>
                <span className="error-input"></span>
              </div>
            </div>
            <div className="flex m-bottom-20">
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-customer-status">Customer Status</label>
                <select id="patient-customer-status">
                  <option value=""></option>
                  <option value="Eksternal">Eksternal</option>
                  <option value="Internal">Internal</option>
                  <option value="Mitra">Mitra</option>
                </select>
                <span className="error-input"></span>
              </div>
              <div className="w-50">
                <label className="m-bottom-5" htmlFor="patient-active-status">Active Status</label>
                <select id="patient-active-status">
                  <option value=""></option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <span className="error-input"></span>
              </div>
            </div>
            <div className="m-top-20 result-process text-center"></div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <button className="btn btn-primary btn-edit-customer" onClick={() => editCustomerSubmit()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
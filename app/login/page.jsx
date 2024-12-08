"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authLogin } from "../utils/axios";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      $('.container-preloader-page').remove();
    }
    else {
      router.push('/');
    }

    $('#user-email, #user-password').on('keydown', function(event){ 
      var id = event.key || event.which || event.keyCode || 0;

      if (id == 13 || id == 'Enter') {
        loginSubmit();
      }
    });
  });

  const loginSubmit = async () => {
    const user_email    = $('#user-email').val();
    const user_password = $('#user-password').val();

    $('.form-validation').html('');

    if (user_email == '') {
      $('#user-email').focus();
      $('.form-validation').html('Email tidak boleh kosong!');
    }
    else if (!checkEmail(user_email)) {
      $('#user-email').focus();
      $('.form-validation').html('Format email salah!');
    }
    else if (user_password == '') {
      $('#user-password').focus();
      $('.form-validation').html('Kata sandi tidak boleh kosong!');
    }
    else if (user_password.length < 4) {
      $('#user-password').focus();
      $('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!');
    }
    else if (!checkPassword(user_password)) {
      $('#user-password').focus();
      $('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');
    }
    else {
      const email    = user_email;
      const password = user_password;

      authLogin({email, password}).then(res => {
        console.log(res.data);

        if (res.data.statusCode == 200) {
          const token = res.data.data.accessToken;

          localStorage.setItem('token', token);
    
          window.location.href = '/';
        }
        else {
          $('.form-validation').html('Terjadi kesalahan. Silahkan coba lagi nanti.');
        }
      }).catch(err => {
        console.log(err.response.data);

        $('.form-validation').html(`${err.response.data.message}`);
      })
    }
  }

  const checkEmail = (email) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(email);
  }

  const checkUsername = (username) => {
    if (/^[a-zA-Z\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {
      return true;
    }
  }

  const checkPassword = (password) => {
    if (/\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
      return true;
    }
  }

  return (
    <div className="container-login">
      <div className="wrapper-login">
        <div className="content-login">
          <h1>Derma Express<span>Clinic</span></h1>
          <div>
            <input type="text" id="user-email" placeholder="Email" autoComplete="off" />
          </div>
          <div>
            <input type="password" id="user-password" placeholder="Kata Sandi" autoComplete="new-password" />
          </div>
          <button className="btn" onClick={() => loginSubmit()}>Submit</button>
          <div className="form-validation"></div>
        </div>
      </div>
    </div>
  )
}
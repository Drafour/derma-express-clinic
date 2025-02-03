"use client";

import $ from "jquery";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authLogin } from "../utils/axios";

export default function Page() {
  const router = useRouter();

  var submit_status = 0;

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
    
    $('#toggle-password').on('click', function(){
      if (submit_status == 0) {
        var obj    = $(this);
        var status = parseInt(obj.attr('data-status'));

        if (status == 1) {
          obj.html('Hide').attr('data-status', '0');
          $('#user-password').attr('type', 'password');
        }
        else {
          obj.html('Show').attr('data-status', '1');
          $('#user-password').attr('type', 'text');
        }
      }
    });
  });

  const loginSubmit = async () => {
    if (submit_status == 0) {
      const user_email    = $('#user-email').val();
      const user_password = $('#user-password').val();

      $('.error-input').html('');

      if (user_email == '') {
        $('#user-email').focus();
        $('.error-input').html('Email tidak boleh kosong!');
      }
      else if (!checkEmail(user_email)) {
        $('#user-email').focus();
        $('.error-input').html('Format email salah!');
      }
      else if (user_password == '') {
        $('#user-password').focus();
        $('.error-input').html('Kata sandi tidak boleh kosong!');
      }
      else if (user_password.length < 4) {
        $('#user-password').focus();
        $('.error-input').html('Kata sandi harus terdiri minimal 4 karakter!');
      }
      else if (!checkPassword(user_password)) {
        $('#user-password').focus();
        $('.error-input').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');
      }
      else {
        submit_status = 1;
  
        $('#user-email, #user-password').prop('disabled', true);
        $('.btn-login').html('<div class="spinner"></div>');

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
            submit_status = 0;
      
            $('#user-email, #user-password').prop('disabled', false);
            $('.btn-login').html('Sign in');
            $('.error-input').html('Terjadi kesalahan. Silahkan coba lagi nanti.');
          }
        }).catch(err => {
          console.log(err.response.data);

          submit_status = 0;
    
          $('#user-email, #user-password').prop('disabled', false);
          $('.btn-login').html('Sign in');
          $('.error-input').html(`${err.response.data.message}`);
        })
      }
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
        <div className="login-content">
          <Image src="/images/logo-01.svg" className="m-top-15 m-bottom-30" alt="Derma Express" width={153} height={107} />
          <h1>Hello!</h1>
          <h5>Welcome back Dermasterian, please log in to start your activities.</h5>
          <div>
            <label htmlFor="user-email">Email</label>
            <input type="email" id="user-email" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="user-password">Password <span id="toggle-password" data-status="0">Hide</span></label>
            <input type="password" id="user-password" autoComplete="new-password" />
          </div>
          <div className="flex align-center">
            <button className="btn-login" onClick={() => loginSubmit()}>Sign in</button>
            <span className="error-input"></span>
          </div>
          <p>Don't have an account? contact admin</p>
        </div>
      </div>
    </div>
  )
}
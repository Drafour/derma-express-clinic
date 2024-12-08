"use client";

import Image from "next/image";
import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getQueue, addQueue } from "../../utils/axios";

export default function Page() {
  const router = useRouter();
  
  let last_queue = '';

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      const token = localStorage.getItem('token');
      const order = 'desc';
      const page  = 1;
      const take  = 1;

      getQueue(token, order, page, take).then(res => {
        console.log(res.data);

        if (res.data.statusCode == 200) {
          var month       = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
          var data_queue  = res.data.data.data;
          var total_queue = data_queue.length;
          var div_html    = '';

          for (var i = 0; i < total_queue; ++i) {
            var date    = new Date(data_queue[i].createdAt);
            var hours   = date.getHours();
            var minutes = date.getMinutes();

            if (hours < 10) {
              hours = '0' + hours;
            }

            if (minutes < 10) {
              minutes = '0' + minutes;
            }

            if (i == 0) {
              last_queue = data_queue[i].number;
            }

            div_html += `<tr>
                           <td>` + (i + 1) + `</td>
                           <td>` + data_queue[i].number + `</td>
                           <td>` + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' ' + hours + ':' + minutes + `</td>
                         </tr>`;
          }

          $('#list-queue').html(div_html);
          $('#last-queue').html(getLastQueue(last_queue));
          $('.container-preloader-page').remove();
        }
      }).catch(err => {
        console.log(err);
      })
    }

    var day_name    = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var month_name  = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var date_now    = new Date();
    var result_date = day_name[date_now.getDay()] + ', ' + (date_now.getDate() < 10 ? '0' + date_now.getDate() : date_now.getDate()) + ' ' + month_name[date_now.getMonth()] + ' ' + date_now.getFullYear();

    $('.date').html(result_date);

    setInterval(function(){
      var currentTime = new Date();
      var hours       = currentTime.getHours();
      var minutes     = currentTime.getMinutes();
      var seconds     = currentTime.getSeconds();

      hours   = (hours < 10 ? '0' : '') + hours;
      minutes = (minutes < 10 ? '0' : '') + minutes;
      seconds = (seconds < 10 ? '0' : '') + seconds;

      var currentTimeString = hours + ':' + minutes + ':' + seconds;

      $('.clock').html(currentTimeString);
    }, 1000);
  });

  const startQueue = () => {
    $('.container-queue').addClass('shown');

    toggleFullScreen();
  }

  const endQueue = () => {
    $('.container-queue').removeClass('shown');

    toggleFullScreen();
  }

  const getLastQueue = (last) => {
    var first_char       = last.charAt(0);
    var result           = last.substring(1);
    var last_digit       = parseInt(result) + 1;
    var total_last_digit = last_digit.toString().length;
    var total_all_digit  = result.length;
    var remain_digit     = total_all_digit - total_last_digit;
    var remain_zero      = '00';

    if (remain_digit < 2) {
      remain_zero = '0';
    }
    else if (remain_digit < 1) {
      remain_zero = '';
    }

    result     = last_digit;
    result     = first_char + remain_zero + result;
    last_queue = result;

    return result;
  }

  const createQueue = () => {
    const token    = localStorage.getItem('token');
    const clinicId = 'c-1';
    const number   = last_queue;
    
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      addQueue(token, {clinicId, number}).then(res => {
        console.log(res.data);
  
        if (res.data.statusCode == 200) {
          $('#last-queue').html(getLastQueue(last_queue));
        }
        else {
          $('.form-validation').html('Terjadi kesalahan. Silahkan coba lagi nanti.');
        }
      }).catch(err => {
        console.log(err.response.data);
      })
    }
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  return (
    <>
      <div className="page-body-wrapper">
        <div className="page-body">
          <div className="mb-8">
            <h4 className="font-black text-xl mb-2">Antrian - Pintu Masuk</h4>
            <p className="mb-4">Di halaman ini menampilkan daftar nomor antrian yang sudah dibuat per hari ini. Klik tombol Mulai Antrian untuk memulai antrian dalam layar penuh.</p>
            <button className="btn btn-success" onClick={() => startQueue()}>Mulai Antrian</button>
          </div>
          <div className="section-data">
            <table className="table text-sm">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Antrian</th>
                  <th>Tanggal Dicetak</th>
                </tr>
              </thead>
              <tbody id="list-queue">
                <tr>
                  <td>1</td>
                  <td>A0001</td>
                  <td>24 Okt 2024 09:30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>A0002</td>
                  <td>24 Okt 2024 09:47</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>A0003</td>
                  <td>24 Okt 2024 10:16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container-queue">
        <div className="wrapper-button">
          <button className="btn" onClick={() => endQueue()}>&times;</button>
        </div>
        <div className="wrapper-queue">
          <div className="content-queue">
            <Image src="/images/logo-white.png" alt="logo" width={254} height={165} />
            <h4>Utan Kayu Raya Jakarta</h4>
            <p><span className="date">Kamis, 24 Oktober 2024</span> <span className="clock">00:00:00</span></p>
            <h3>Selamat Datang</h3>
            <h5>Silahkan ambil nomor antrian</h5>
            <h1 id="last-queue">A0004</h1>
            <p>Klik disini</p>
            <button className="btn" onClick={() => createQueue()}>Ambil Nomor</button>
          </div>
        </div>
      </div>
    </>
  )
}
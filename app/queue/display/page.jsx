"use client";

import $ from "jquery";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentQueue, addCurrentQueue } from "../../utils/axios";

export default function Page() {
  const router   = useRouter();
  const clinicId = 'ff14a412-6239-4c50-9453-75370e9f165b';

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      var day_name    = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      var month_name  = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      var date_now    = new Date();
      var result_date = day_name[date_now.getDay()] + ', ' + (date_now.getDate() < 10 ? '0' + date_now.getDate() : date_now.getDate()) + ' ' + month_name[date_now.getMonth()] + ' ' + date_now.getFullYear();

      $('.display-queue-content .queue-date').html(result_date);
  
      setInterval(function(){
        var currentTime = new Date();
        var hours       = currentTime.getHours();
        var minutes     = currentTime.getMinutes();
        var seconds     = currentTime.getSeconds();
  
        hours   = (hours < 10 ? '0' : '') + hours;
        minutes = (minutes < 10 ? '0' : '') + minutes;
        seconds = (seconds < 10 ? '0' : '') + seconds;
  
        var currentTimeString = hours + ':' + minutes + ':' + seconds;
  
        $('.display-queue-content .queue-clock').html(currentTimeString);
      }, 1000);

      currentQueue();

      $('.container-preloader-page').remove();
    }
  });

  const startQueue = () => {
    $('#queue-1').addClass('hidden');
    $('#queue-2, .wrapper-logo').removeClass('hidden');

    // toggleFullScreen();
  }

  const endQueue = () => {
    // toggleFullScreen();

    router.push('/queue');
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

  const currentQueue = () => {
    const token = localStorage.getItem('token');
    const type  = 'Admission';

    getCurrentQueue(token, clinicId, type).then(res => {
      console.log(res.data.data);

      $('#current-queue, #current-queue-print').html(res.data.data.currentQueue.number);
    }).catch(err => {
      console.log(err.response.data);
    });
  }

  const addQueue = () => {
    const token = localStorage.getItem('token');
    const type  = 'Admission';

    addCurrentQueue(token, {clinicId, type}).then(res => {
      console.log(res.data.data);

      currentQueue();
    }).catch(err => {
      console.log(err.response.data);
    });
  }

  const printDiv = () => {
    $('#container-print .date-queue').html($('.display-queue-content .date-queue').html());

    var divToPrint = document.getElementById('container-print');
    var newWin     = window.open('', 'Print-Window');
    var content    = `<html>
                        <head>
                          <link rel="preconnect" href="https://fonts.googleapis.com">
                          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                        </head>
                        <body onload="window.print()" style="margin:0;font-family:'Roboto', serif;">
                          ` + divToPrint.innerHTML +
                        `</body>
                      </html>`;

    newWin.document.open();
    newWin.document.write(content);
    newWin.document.close();

    setTimeout(function(){
      // newWin.close();
      // addQueue();
    }, 10);
  }

  return (
    <div>
      <div className="container-body">
        <div className="section-display-queue-monitor">
          <div className="wrapper-button">
            <button className="btn btn-close transition" onClick={() => endQueue()}>&times;</button>
          </div>
          <div className="wrapper-logo hidden">
            <Image src="/images/logo-02.svg" alt="Derma Express" width={230} height={161} />
          </div>
          <div className="wrapper-display-queue text-center">
            <div id="queue-1">
              <button className="btn btn-start-queue" onClick={() => startQueue()}>Mulai Antrian</button>
            </div>
            <div className="hidden" id="queue-2">
              <h2 className="m-bottom-20">Selamat Datang</h2>
              <div className="display-queue-content">
                <h4>Silahkan ambil nomor antrian</h4>
                <h1 className="m-top-30 m-bottom-5" id="current-queue">A0005</h1>
                <p className="date-queue"><span className="queue-date">Kamis, 24 Okt 2024</span><span className="date-separator"> | </span><span className="queue-clock">00:00:00</span></p>
                <button className="btn m-top-50" onClick={() => printDiv()}>Ambil Nomor <Image src="/images/icon-print.svg" alt="print" width={32} height={33} /></button>
              </div>
              <h3 className="m-top-20">Utan Kayu</h3>
              <p className="m-top-5">Jl. Utan Kayu Raya No.79B dan 79C, Jakarta Timur</p>
            </div>
          </div>
          <div className="hidden" id="container-print">
            <div style={{padding:'20px 15px 30px 15px',width:'200px',color:'#000',fontFamily:'Roboto, sans-serif',backgroundColor:'#fff'}}>
              <Image src="/images/logo-02.svg" alt="Derma Express" width={130} height={91} style={{display:'block',margin:'0 auto',width:'130px',height:'auto',filter:'invert(1)'}} />
              <h2 style={{margin:'40px 0 0 0',color:'#232323',fontSize:'44px',fontWeight:'700',lineHeight:'50px',textAlign:'center'}} id="current-queue-print">A0005</h2>
              <p className="date-queue" style={{margin:'0 0 35px 0',fontSize:'12px',lineHeight:'18px',textAlign:'center'}}><span className="queue-date">Kamis, 24 Okt 2024</span><span className="date-separator"> | </span><span className="queue-clock">00:00:00</span></p>
              <h4 style={{margin:'0',fontSize:'20px',fontWeight:'500',lineHeight:'28px',textAlign:'center'}}>Utan Kayu</h4>
              <p style={{margin:'0',fontSize:'12px',lineHeight:'18px',textAlign:'center'}}>Jl. Utan Kayu Raya No.79B dan 79C, Jakarta Timur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
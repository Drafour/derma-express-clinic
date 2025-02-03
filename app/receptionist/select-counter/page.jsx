"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      router.push('/login');
    }
    else {
      $('.home-box').removeClass('active');

      if (localStorage.getItem('counter') !== null) {
        $('#counter-' + localStorage.getItem('counter')).addClass('active');
      }

      $('.container-preloader-page').remove();
    }
  });

  useEffect(() => {
    $('.home-box').on('click', function(){
      var obj = $(this);
      var val = obj.find('h2').html();

      if (!obj.hasClass('active')) {
        localStorage.setItem('counter', val);

        $('.home-box').removeClass('active');
        $('#counter-' + val).addClass('active');
      }
    });

    // to prevent leak memory unsubscribe from event on unmount
    return () => {
      $('.home-box').off('click');
    }
  });

  return (
    <div>
      <div className="container-body transition">
        <div className="section-home-receptionist w-90 margin-auto">
          <div className="container-home-box flex m-bottom-40">
            <div className="home-box w-33 text-center active" id="counter-1">
              <h5 className="m-bottom-10">Counter</h5>
              <h2>1</h2>
            </div>
            <div className="home-box w-33 text-center" id="counter-2">
              <h5 className="m-bottom-10">Counter</h5>
              <h2>2</h2>
            </div>
            <div className="home-box w-33 text-center" id="counter-3">
              <h5 className="m-bottom-10">Counter</h5>
              <h2>3</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
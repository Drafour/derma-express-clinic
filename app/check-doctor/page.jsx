"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      changeTab('consulting');

      $('.container-preloader-page').remove();
    }
  });

  const changeTab = (type) => {
    $('.container-tab .btn').addClass('btn-outline');
    $('#tab-' + type).removeClass('btn-outline');
    $('.container-tab-content').addClass('hidden');
    $('#content-' + type).removeClass('hidden');
  }

  return (
    <>
    <div className="page-body-wrapper">
      <div className="page-body">
        <div className="mb-8">
          <h4 className="font-black text-xl mb-2">Check Doctor</h4>
        </div>
        <div className="section-data">
          <div className="container-tab mb-5">
            <button className="btn btn-success" id="tab-consulting" onClick={() => changeTab('consulting')}>Consulting Room</button>
            <button className="btn btn-success btn-outline" id="tab-treatment" onClick={() => changeTab('treatment')}>Treatment Room</button>
          </div>
          <div className="container-tab-content gap-4" id="content-consulting">
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 1.1</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 1.2</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 1.3</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
          </div>
          <div className="container-tab-content gap-4 hidden" id="content-treatment">
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 2.1</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 2.2</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
            <div className="card bg-primary text-primary-content w-full">
              <div className="card-body">
                <h2 className="card-title">Room 2.3</h2>
                <p>Doctor <span>: -</span><br />Patient <span>: -</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
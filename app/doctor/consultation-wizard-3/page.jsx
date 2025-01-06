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
      $('.container-preloader-page').remove();
    }
  });

  return (
    <div>
      <div className="container-body transition">
        <div className="section-consultation-wizard-result">
          <div className="flex w-90 margin-auto">
            <div className="result-content w-60">
              <h4 className="wizard-title m-bottom-10">Treatment</h4>
              <h5 className="m-bottom-5">Oxygen Hydrating Therapy</h5>
              <p className="wizard-description m-bottom-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h4 className="wizard-title m-bottom-15">Product Treatment</h4>
              <div className="flex">
                <div className="w-50">
                  <ul>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Two</p>
                          <h5>Rp330.000 <span>x 1</span></h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Three</p>
                          <h5>Rp480.000 <span>x 1</span></h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Four</p>
                          <h5>190.000 <span>x 1</span></h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Six</p>
                          <h5>760.000 <span>x 1</span></h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-50">
                  <div className="box-voucher flex m-bottom-20">
                    <div>
                      <p>Gunakan promo</p>
                      <h5>Bayar Suka-Suka!</h5>
                    </div>
                    <div>
                      <p>Diskon</p>
                      <h5>100%</h5>
                    </div>
                  </div>
                  <div className="wizard-payment-result">
                    <div className="m-bottom-20">
                      <p>Payment Method</p>
                      <h5>Transfer Bank</h5>
                    </div>
                    <h5 className="m-bottom-10">Subtotal <span>Rp1.760.000</span></h5>
                    <h5 className="m-bottom-10">Tax 11% <span>Rp193.600</span></h5>
                    <hr />
                    <h4 className="m-top-10">Total <span>Rp1.953.600</span></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-sidebar w-40">
              <h4 className="wizard-title m-bottom-10">Control</h4>
              <div>
                <p>Date & Time</p>
                <h5 className="flex align-center m-bottom-30">Wed, 22 Sep 2024 | 10:00 - 11:00 AM <button className="btn btn-edit"><img src="/images/icon-edit.svg" alt="edit" width={16} height={16} /></button></h5>
              </div>
              <h4 className="wizard-title m-bottom-10 flex align-center">Medical Record <button className="btn btn-edit"><img src="/images/icon-edit.svg" alt="edit" width={16} height={16} /></button></h4>
              <p className="wizard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <a href="/doctor" className="btn btn-primary">Save</a>
          </div>
        </div>
      </div>
    </div>
  )
}
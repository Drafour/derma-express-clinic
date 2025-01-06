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
        <div className="section-history-transaction w-90 margin-auto">
          <h3 className="m-bottom-30">Recent Transaction</h3>
          <div className="container-history flex">
            <div className="w-30">
              <h4 className="m-bottom-20">Type</h4>
              <ul>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
              </ul>
            </div>
            <div className="w-30">
              <h4 className="m-bottom-20">Amount</h4>
              <ul>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
              </ul>
            </div>
            <div className="w-20">
              <h4 className="m-bottom-20">Status</h4>
              <ul>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
              </ul>
            </div>
            <div className="w-20">
              <h4 className="m-bottom-20">Method</h4>
              <ul>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
                <li className="m-bottom-10"><a href="detail-transaction.html"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
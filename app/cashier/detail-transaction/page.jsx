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
        <div className="section-detail-transaction">
          <div className="flex flex-column w-80 margin-auto">
            <div className="container-detail">
              <div className="detail-header flex align-center m-bottom-30">
                <h4>Derma Express <span>Utan Kayu</span></h4>
                <button className="btn btn-primary">Print</button>
              </div>
              <div className="detail-content">
                <div className="flex m-bottom-20">
                  <div className="w-33">
                    <p>Name</p>
                    <h5>Dian Sastrowardoyo</h5>
                  </div>
                  <div className="w-33">
                    <p>Transaction Date</p>
                    <h5>Wed, 22 Sep 2024 | 10:00 - 11:00</h5>
                  </div>
                  <div className="w-33">
                    <p>Invoice</p>
                    <h5>INV/20240825/MPL/4108407858</h5>
                  </div>
                </div>
                <table className="history-table w-100">
                  <thead className="has-border-top has-border-bottom">
                    <tr>
                      <th>Info Produk</th>
                      <th>Jumlah</th>
                      <th>Harga Satuan</th>
                      <th>Total Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product Two</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp330.000</td>
                      <td className="text-right">Rp330.000</td>
                    </tr>
                    <tr>
                      <td>Product Three</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp480.000</td>
                      <td className="text-right">Rp480.000</td>
                    </tr>
                    <tr>
                      <td>Product Four</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp190.000</td>
                      <td className="text-right">Rp190.000</td>
                    </tr>
                    <tr>
                      <td>Product Six</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp760.000</td>
                      <td className="text-right">Rp760.000</td>
                    </tr>
                    <tr>
                      <td>Consultation</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp500.000</td>
                      <td className="text-right">Rp500.000</td>
                    </tr>
                    <tr>
                      <td>Treatment</td>
                      <td className="text-center">1</td>
                      <td className="text-right">Rp2.500.000</td>
                      <td className="text-right">Rp2.500.000</td>
                    </tr>
                    <tr className="has-border-top">
                      <td colSpan="3">Subtotal</td>
                      <td className="text-right">Rp4.760.000</td>
                    </tr>
                    <tr>
                      <td colSpan="3">Tax 11%</td>
                      <td className="text-right">523.600</td>
                    </tr>
                    <tr className="has-border-top has-border-bottom">
                      <td colSpan="3">Total</td>
                      <td className="text-right">Rp5.283.600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
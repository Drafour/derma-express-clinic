"use client";

import $ from "jquery";
import Link from "next/link";
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

  const printDiv = () => {
    var divToPrint = document.getElementById('DivIdToPrint');
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
      newWin.close();
    }, 10);
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-payment-detail w-90 margin-auto">
          <div className="container-detail-box flex justify-content-center">
            <div className="detail-box w-40">
              <div className="detail-header flex align-center">
                <h4>Product Treatment</h4>
                <button href="/cashier/print" className="btn btn-primary" onClick={printDiv}>Print Bill</button>
              </div>
              <div className="detail-content">
                <ul className="container-cart m-bottom-30">
                  <li className="flex align-center m-bottom-10">
                    <div className="cart-left">
                      <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                    </div>
                    <div className="cart-right">
                      <p>Product Two</p>
                      <h5>Rp330.000 <span>x 1</span></h5>
                    </div>
                  </li>
                  <li className="flex align-center m-bottom-10">
                    <div className="cart-left">
                      <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                    </div>
                    <div className="cart-right">
                      <p>Product Three</p>
                      <h5>Rp480.000 <span>x 1</span></h5>
                    </div>
                  </li>
                  <li className="flex align-center m-bottom-10">
                    <div className="cart-left">
                      <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                    </div>
                    <div className="cart-right">
                      <p>Product Four</p>
                      <h5>Rp190.000 <span>x 1</span></h5>
                    </div>
                  </li>
                  <li className="flex align-center m-bottom-10">
                    <div className="cart-left">
                      <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                    </div>
                    <div className="cart-right">
                      <p>Product Six</p>
                      <h5>Rp760.000 <span>x 1</span></h5>
                    </div>
                  </li>
                  <li className="flex align-center m-top-20 m-bottom-10">
                    <div className="cart-left">
                      <p>Consultation</p>
                    </div>
                    <div className="cart-right">
                      <h5>Rp500.000</h5>
                    </div>
                  </li>
                  <li className="flex align-center m-bottom-10">
                    <div className="cart-left">
                      <p>Treatment</p>
                    </div>
                    <div className="cart-right">
                      <h5>Rp2.500.000</h5>
                    </div>
                  </li>
                </ul>
                <div className="container-total">
                  <h5 className="m-bottom-10">Subtotal <span>Rp4.760.000</span></h5>
                  <h5 className="m-bottom-10">Tax 11% <span>Rp523.600</span></h5>
                  <hr />
                  <h4 className="m-top-10 m-bottom-20">Total <span>Rp5.283.600</span></h4>
                  <button className="btn btn-edit flex align-center"><span>Edit Request</span><img src="/images/icon-edit.svg" alt="edit" width={16} height={16} /></button>
                </div>
              </div>
              <div className="detail-footer flex justify-content-center">
                <Link className="btn btn-link" href="/cashier/queue">Cancel</Link>
                <button className="btn btn-primary">Bayar</button>
              </div>
            </div>
            <div className="detail-sidebar-box flex flex-column w-25">
              <div className="box-patient flex align-center m-bottom-20">
                <div className="patient-picture blue"><span>DS</span></div>
                <div className="patient-name">
                  <p>A0001</p>
                  <h4>Dian Sastrowardoyo</h4>
                </div>
              </div>
              <div className="flex flex-column align-center justify-content-center">
                <p>Visit type</p>
                <h5 className="m-bottom-20">New Transaaction</h5>
                <button className="btn btn-primary">Call</button>
              </div>
              
              <div className="hidden" id="DivIdToPrint">
                <div style={{padding:'15px',width:'200px',backgroundColor:'#fff'}}>
                  <div style={{paddingBottom:'15px',textAlign:'center'}}>
                    <h3 style={{margin:'0'}}>Derma Express</h3>
                    <p style={{margin:'0',fontSize:'10px',lineHeight:'15px'}}>Jl. Utan Kayu Raya No.79B dan 79C, Jakarta Timur</p>
                    <p style={{margin:'0',fontSize:'10px',lineHeight:'15px'}}>0813 2000 8810</p>
                    <p style={{margin:'0',fontSize:'10px',lineHeight:'15px'}}>https://derma-express.com</p>
                  </div>
                  <hr />
                  <div style={{padding:'10px 0 11px 0'}}>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Product Two
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp330.000
                      <span style={{float:'right'}}>Rp330.000</span>
                    </p>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Product Three
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp480.000
                      <span style={{float:'right'}}>Rp480.000</span>
                    </p>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Product Four
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp190.000
                      <span style={{float:'right'}}>Rp190.000</span>
                    </p>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Product Six
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp760.000
                      <span style={{float:'right'}}>Rp760.000</span>
                    </p>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Consultation
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp500.000
                      <span style={{float:'right'}}>Rp500.000</span>
                    </p>
                    <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                      Treatment
                      <br />&nbsp;&nbsp;&nbsp;
                      1&nbsp;&nbsp;&times;&nbsp;&nbsp;Rp2.500.000
                      <span style={{float:'right'}}>Rp2.500.000</span>
                    </p>
                  </div>
                  <hr />
                  <div style={{padding:'10px 0'}}>
                    <p style={{margin:'0',fontSize:'12px',lineHeight:'18px'}}>Subtotal<span style={{float:'right'}}>Rp4.760.000</span></p>
                    <p style={{margin:'0',fontSize:'12px',lineHeight:'18px'}}>Tax 11%<span style={{float:'right'}}>Rp523.600</span></p>
                    <p style={{margin:'5px 0 0 0',fontSize:'12px',fontWeight:'700',lineHeight:'18px'}}>TOTAL<span style={{float:'right'}}>Rp5.283.600</span></p>
                  </div>
                  <hr />
                  <div style={{padding:'15px 0 100px 0',textAlign:'center'}}>
                    <p style={{margin:'0',fontSize:'12px',lineHeight:'18px',letterSpacing:'3px'}}>Terima kasih atas kunjungan anda.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
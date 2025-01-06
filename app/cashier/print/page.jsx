"use client";

import $ from "jquery";
import Image from "next/image";
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
    var newWin     = window.open('','Print-Window');

    newWin.document.open();
    newWin.document.write('<html><body onload="window.print()" style="margin:0;">'+divToPrint.innerHTML+'</body></html>');
    newWin.document.close();

    // setTimeout(function(){
    //   newWin.close();
    // }, 10);
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-print-cashier w-90 margin-auto">
          <button className="btn btn-primary" onClick={printDiv}>Print</button>
          <div className="flex justify-center">
            <div id="DivIdToPrint">
              <div style={{padding:'20px',width:'190px',backgroundColor:'#fff'}}>
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
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp330.000
                    <span style={{float:'right'}}>Rp330.000</span>
                  </p>
                  <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                    Product Three
                    <br />&nbsp;&nbsp;&nbsp;
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp480.000
                    <span style={{float:'right'}}>Rp480.000</span>
                  </p>
                  <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                    Product Four
                    <br />&nbsp;&nbsp;&nbsp;
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp190.000
                    <span style={{float:'right'}}>Rp190.000</span>
                  </p>
                  <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                    Product Six
                    <br />&nbsp;&nbsp;&nbsp;
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp760.000
                    <span style={{float:'right'}}>Rp760.000</span>
                  </p>
                  <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                    Consultation
                    <br />&nbsp;&nbsp;&nbsp;
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp500.000
                    <span style={{float:'right'}}>Rp500.000</span>
                  </p>
                  <p style={{margin:'0 0 5px 0',fontSize:'12px',lineHeight:'16px'}}>
                    Treatment
                    <br />&nbsp;&nbsp;&nbsp;
                    1&nbsp;&nbsp;&nbsp;&times;&nbsp;&nbsp;&nbsp;Rp2.500.000
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
  )
}
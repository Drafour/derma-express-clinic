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

  return (
    <div>
      <div className="container-body transition">
        <div className="section-consultation-wizard flex w-90 margin-auto">
          <div className="w-75">
            <div className="wizard-search m-bottom-10 flex">
              <img src="/images/icon-search.svg" className="search-icon" alt="search" width={18} height={18} />
              <input type="text" id="search-input" placeholder="Search something here" />
              <button className="btn">
                <img src="/images/icon-filter-lines.svg" alt="filter lines" width={18} height={18} />
              </button>
            </div>
            <div className="wizard-content">
              <h4 className="wizard-title m-bottom-10">Categories</h4>
              <div className="container-box-categories flex m-bottom-20">
                <div className="box-category flex align-center w-20 active">
                  <img src="/images/default-image-square.png" alt="category picture" width={32} height={32} />
                  <div>
                    <h5 title="Category One">Category One</h5>
                    <p>72 items</p>
                  </div>
                </div>
                <div className="box-category flex align-center w-20">
                  <img src="/images/default-image-square.png" alt="category picture" width={32} height={32} />
                  <div>
                    <h5 title="Category Two">Category Two</h5>
                    <p>26 items</p>
                  </div>
                </div>
                <div className="box-category flex align-center w-20">
                  <img src="/images/default-image-square.png" alt="category picture" width={32} height={32} />
                  <div>
                    <h5 title="Category Three">Category Three</h5>
                    <p>48 items</p>
                  </div>
                </div>
                <div className="box-category flex align-center w-20">
                  <img src="/images/default-image-square.png" alt="category picture" width={32} height={32} />
                  <div>
                    <h5 title="Category Four">Category Four</h5>
                    <p>33 items</p>
                  </div>
                </div>
                <div className="box-category flex align-center w-20">
                  <img src="/images/default-image-square.png" alt="category picture" width={32} height={32} />
                  <div>
                    <h5 title="Category Five">Category Five</h5>
                    <p>17 items</p>
                  </div>
                </div>
              </div>
              <h4 className="wizard-title">Most Ordered</h4>
              <div className="container-box-product flex">
                <div className="box-product flex w-33">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product One</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp500.000</h5>
                        <button className="btn btn-add"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33 active">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Two</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp330.000</h5>
                      </div>
                      <div className="container-quantity flex">
                        <button className="btn btn-minus"><span>-</span></button>
                        <p className="text-center">1</p>
                        <button className="btn btn-plus"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33 active">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Three</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">480.000</h5>
                      </div>
                      <div className="container-quantity flex">
                        <button className="btn btn-minus"><span>-</span></button>
                        <p className="text-center">1</p>
                        <button className="btn btn-plus"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="wizard-title">Product Treatment</h4>
              <div className="container-box-product flex">
                <div className="box-product flex w-33 active">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Four</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp190.000</h5>
                      </div>
                      <div className="container-quantity flex">
                        <button className="btn btn-minus"><span>-</span></button>
                        <p className="text-center">1</p>
                        <button className="btn btn-plus"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Five</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp300.000</h5>
                        <button className="btn btn-add"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33 active">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Six</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">760.000</h5>
                      </div>
                      <div className="container-quantity flex">
                        <button className="btn btn-minus"><span>-</span></button>
                        <p className="text-center">1</p>
                        <button className="btn btn-plus"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Seven</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp300.000</h5>
                        <button className="btn btn-add"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Eight</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp300.000</h5>
                        <button className="btn btn-add"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-product flex w-33">
                  <div className="flex">
                    <img src="/images/default-image-square.png" alt="product picture" width={100} height={100} />
                    <div className="flex flex-column">
                      <p>Product Nine</p>
                      <div className="container-price flex align-center">
                        <h5 className="flex">Rp300.000</h5>
                        <button className="btn btn-add"><span>+</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-25">
            <div className="wizard-sidebar">
              <div className="sidebar-header flex align-center m-bottom-20">
                <div>
                  <h4 className="wizard-title m-bottom-5">Order Details</h4>
                  <p className="flex align-center">#ORD-3291 <button className="btn btn-copy"><img src="/images/icon-copy.svg" alt="copy" width={14} height={15} /></button></p>
                </div>
                <button className="btn btn-menu">
                  <img src="/images/icon-dots-horizontal.svg" alt="menu" width={16} height={16} />
                </button>
              </div>
              <div className="sidebar-tab-button flex m-bottom-20">
                <button className="btn w-50 active">Treatment</button>
                <button className="btn w-50">Menu 1</button>
              </div>
              <div className="sidebar-tab-content">
                <div className="wrapper-content active">
                  <div className="content-patient flex align-center m-bottom-20">
                    <div className="w-40">
                      <p>Patient Name</p>
                      <h4>Yuki Kato</h4>
                    </div>
                    <div>
                      <p>Queue</p>
                      <h4>A0001</h4>
                    </div>
                    <button className="btn btn-edit">
                      <img src="/images/icon-edit.svg" alt="edit" width={16} height={16} />
                    </button>
                  </div>
                  <ul>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Two</p>
                          <h5>Rp330.000 <span>x 1</span></h5>
                        </div>
                        <button className="btn btn-delete">
                          <img src="/images/icon-trash.svg" alt="delete" width={16} height={16} />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Three</p>
                          <h5>Rp480.000 <span>x 1</span></h5>
                        </div>
                        <button className="btn btn-delete">
                          <img src="/images/icon-trash.svg" alt="delete" width={16} height={16} />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Four</p>
                          <h5>190.000 <span>x 1</span></h5>
                        </div>
                        <button className="btn btn-delete">
                          <img src="/images/icon-trash.svg" alt="delete" width={16} height={16} />
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="box-cart flex align-center m-bottom-10">
                        <img src="/images/default-image-square.png" alt="product picture" width={56} height={56} />
                        <div>
                          <p>Product Six</p>
                          <h5>760.000 <span>x 1</span></h5>
                        </div>
                        <button className="btn btn-delete">
                          <img src="/images/icon-trash.svg" alt="delete" width={16} height={16} />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-patient-details-footer">
          <div className="flex align-center justify-content-center w-90 margin-auto">
            <Link href="/doctor/consultation-wizard-3" className="btn btn-primary">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
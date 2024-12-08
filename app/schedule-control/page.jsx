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
    <>
    <div className="page-body-wrapper">
      <div className="page-body">
        <div className="mb-8">
          <h4 className="font-black text-xl mb-2">Schedule Control</h4>
        </div>
        <div className="section-data">
          <div className="flex gap-4 mb-5">
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text text-black">Date</span>
              </div>
              <input type="date" className="input input-bordered w-full" name="schedule-date" />
            </label>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text text-black">Doctor</span>
              </div>
              <select className="select select-bordered w-full" name="schedule-doctor">
                <option value="all">All</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
              </select>
            </label>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text text-black">Clinic</span>
              </div>
              <select className="select select-bordered w-full" name="schedule-clinic">
                <option value="all">All</option>
                <option value="Clinic 1">Clinic 1</option>
                <option value="Clinic 2">Clinic 2</option>
              </select>
            </label>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text text-black">Type Treatment</span>
              </div>
              <select className="select select-bordered w-full" name="schedule-type-treatment">
                <option value="all">All</option>
                <option value="Non Package">Non Package</option>
                <option value="Package">Package</option>
              </select>
            </label>
          </div>
          <table className="table text-sm">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Customer</th>
                <th>Phone Number</th>
                <th>Clinic</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody id="list-customer">
              <tr>
                <td>John Doe</td>
                <td>Marina Nadaline</td>
                <td>081234567890</td>
                <td>Clinic 1</td>
                <td>Acne Scar Treatment 3 bulan (3x)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
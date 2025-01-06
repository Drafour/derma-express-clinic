"use client";

import $ from "jquery";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Page() {
  const router            = useRouter();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      $('.container-preloader-page').remove();
    }
  });

  const changeCalendar = (nextValue) => {
    setValue(nextValue);
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-treatment-reschedule w-90 margin-auto">
          <div className="flex margin-auto">
            <div className="w-65 m-bottom-50">
              <div className="header-calendar flex align-center">
                <h3>September 18 - 24, 2024</h3>
                <div className="header-navigation flex align-center">
                  <button className="btn"><Image src="/images/icon-chevron-left.svg" alt="chevron left" width={24} height={24} /></button>
                  <button className="btn"><Image src="/images/icon-chevron-right.svg" alt="chevron right" width={24} height={24} /></button>
                </div>
                <select>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
              <div className="content-calendar">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th className="small-title">Time</th>
                      <th><h4>18</h4><p className="small-title">Monday</p></th>
                      <th><h4>19</h4><p className="small-title">Tuesday</p></th>
                      <th className="active"><h4>20</h4><p className="small-title">Wednesday</p></th>
                      <th><h4>21</h4><p className="small-title">Thursday</p></th>
                      <th><h4>22</h4><p className="small-title">Friday</p></th>
                      <th><h4>23</h4><p className="small-title">Saturday</p></th>
                      <th><h4>24</h4><p className="small-title">Sunday</p></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="small-title text-center">08:00</td>
                      <td colSpan={2} rowSpan={3}>
                        <div className="calendar-box flex flex-column color-1">
                          <h4>Dian Sastrowardoyo</h4>
                          <p className="flex"><Image src="/images/icon-o-clock.svg" alt="clock" width={16} height={16} /> Treatment Name</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">09:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">10:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">11:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">12:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">13:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">14:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">15:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">16:00</td>
                    </tr>
                    <tr>
                      <td className="small-title text-center">17:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-35">
              <div className="btn-new-schedule flex align-center m-bottom-40">
                <Image src="/images/icon-plus-blue-white.svg" alt="plus" width={48} height={48} />
                <div>
                  <h4 className="m-bottom-5">Add New Reschedule</h4>
                  <p>Click here for add control schedule</p>
                </div>
              </div>
              <Calendar className="m-bottom-40" onChange={changeCalendar} value={value} />
              <div className="detail-sidebar">
                <h4 className="m-bottom-20">Calendar Details <a href="#"><Image src="/images/icon-plus-green.svg" alt="plus" width={20} height={20} /></a></h4>
                <label className="container-checkbox color-1 m-bottom-20">Type Control A
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark transition"></span>
                </label>
                <label className="container-checkbox color-2 m-bottom-20">Type Control B
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark transition"></span>
                </label>
                <label className="container-checkbox color-3 m-bottom-20">Type Control C
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark transition"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
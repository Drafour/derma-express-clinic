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
    <>
      <h4 className="font-black text-xl mb-2">Selamat datang di Derma Express Utan Kayu Raya Jakarta</h4>
      <p>Anda masuk sebagai Super Admin.</p>
    </>
  )
}
import "./globals.css";
import Header from "./common/header";
import Sidebar from "./common/sidebar";

// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata = {
  title: "Derma Express Clinic",
  description: "A Company by Dermaster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white" data-theme="emerald">
      <body className="text-black">
        <Header/>
        <Sidebar />
        <main className="container-body">{children}</main>
        <div className="container-preloader-page"></div>
      </body>
    </html>
  )
}
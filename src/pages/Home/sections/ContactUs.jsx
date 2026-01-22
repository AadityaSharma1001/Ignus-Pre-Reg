import React from "react";
import qr1 from "../assets/qr1.svg";
import qr2 from "../assets/qr2.svg";
import qr3 from "../assets/qr3.svg";
export default function ContactUs() {
    return (
        <section className="w-full py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

            <h2 className="text-3xl md:text-4xl font-bold text-[#370068] font-rosiana tracking-wider">
                CONTACT US
            </h2>

            <div className="flex gap-6">
                <img src={qr1} alt="QR 1" className="w-20 h-20" />
                <img src={qr2} alt="QR 2" className="w-20 h-20" />
                <img src={qr3} alt="QR 3" className="w-20 h-20" />
            </div>
            </div>
        </section>
    )
}
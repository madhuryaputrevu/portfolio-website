import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
    active: string
}

export default function Header({active}: HeaderProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const items = [
        {
            name: "Work",
            href: "/",
        },
        {
            name: "Play",
            href: "/play",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
    <div className={`min-w-screen flex flex-col mx-auto container bg-zinc-50`}>
        <div className={`flex-grow flex flex-col items-center`}>
          <header className={`z-50 capitalize text-zinc-600 text-xl font-normal antialiased w-full flex flex-row justify-between px-4 py-4`}>
              <div className={``}>
                  <div
                    className={`w-8 h-8 flex flex-col justify-between p-2 md:hidden`} 
                    onTouchEnd={() => {dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true)}}>
                      <div className={`w-full h-0.5 bg-black`}></div>
                      <div className={`w-full h-0.5 bg-black`}></div>
                      <div className={`h-0.5 bg-black transition-all ${dropdownOpen ? `w-full` : `w-1/2`}`}></div>
                  </div>
                  <div className={`flex-none flex flex-row space-x-3`}>
                       {items.map((item) => (
                        <div key={item.href} className={`hidden md:block`}>
                            <Link href={item.href}>
                                <a>
                                    <span className={`${active == item.href ? `text-red-500`: `text-zinc-600`} hover:text-red-500 transition-all`}>
                                        {item.name}
                                    </span>
                                </a>
                            </Link>
                        </div>
                       ))}
                  </div>
              </div>
              <div className={`flex-none flex flex-col items-center justify-center`}>
                  <span>MADHURYA PUTREVU</span>
              </div>
          </header>
          <div className={`bg-white absolute top-0 left-0 z-10 w-screen h-screen flex flex-col items-center justify-center space-y-6 ${dropdownOpen ? `` : `hidden`}`}>
              {items.map((item) => (
                    <Link href={item.href} key={item.href} className={``}>
                        <a>
                            <span className={`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>
                                {item.name}
                            </span>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    );
}
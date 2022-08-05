/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

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
    <div class={tw`min-w-screen flex flex-col mx-auto container bg-zinc-50`}>
        <div class={tw`flex-grow flex flex-col items-center`}>
          <header class={tw`z-50 capitalize text-zinc-600 text-xl font-normal antialiased w-full flex flex-row justify-between px-4 py-4`}>
              <div class={tw``}>
                  <div 
                    class={tw`w-8 h-8 flex flex-col justify-between p-2 md:hidden`} 
                    onTouchEnd={() => {dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true)}}>
                      <div class={tw`w-full h-0.5 bg-black`}></div>
                      <div class={tw`w-full h-0.5 bg-black`}></div>
                      <div class={tw`h-0.5 bg-black transition-all ${dropdownOpen ? `w-full` : `w-1/2`}`}></div>
                  </div>
                  <div class={tw`flex-none flex flex-row space-x-3`}>
                       {items.map((item) => (
                            // TODO: change element color and hover color
                            <a href={item.href} class={tw`hidden md:block`}>
                                <span class={tw`${active == item.href ? `text-red-500`: `text-zinc-600`} hover:text-zinc-100 transition-all`}>
                                    {item.name}
                                </span>
                            </a>
                       ))}              
                  </div>
              </div>
              <div class={tw`flex-none flex flex-col items-center justify-center`}>
                  <span>MADHURYA PUTREVU</span>
              </div>
          </header>
          <div class={tw`bg-white absolute top-0 left-0 z-10 w-screen h-screen flex flex-col items-center justify-center space-y-6 ${dropdownOpen ? `` : `hidden`}`}>
              {items.map((item) => (
                    <a href={item.href} class={tw``}>
                        <span class={tw`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>
                            {item.name}
                        </span>
                    </a>    
                ))}                 
          </div> 
        </div>  
    </div>
    );
  }
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`min-w-screen min-h-screen flex flex-col mx-auto container bg-zinc-50`}>
      <div class={tw`flex-grow flex flex-col items-center`}>
        <header class={tw`z-50 capitalize text-zinc-600 text-xl font-normal antialiased w-full flex flex-row justify-between px-4 py-4`}>
            <div class={tw``}>
                <div class={tw`w-8 h-8 flex flex-col justify-between p-2 md:hidden`} id="dropdown-button">
                    <div class={tw`w-full h-0.5 bg-black`}></div>
                    <div class={tw`w-full h-0.5 bg-black`}></div>
                    <div class={tw`w-1/2 h-0.5 bg-black transition-all`} id="dropdown-button-last-line"></div>
                </div>
                <div class={tw`flex-none flex flex-row space-x-3`}>
                    <a href="./about/index.html" class={tw`hidden md:block`}><span class={tw`text-zinc-600 hover:text-zinc-900 transition-all`}>About</span></a>
                    <a href="./work/index.html" class={tw`hidden md:block`}><span class={tw`text-zinc-600 hover:text-zinc-900 transition-all`}>Work</span></a>
                    <a href="./play/index.html" class={tw`hidden md:block`}><span class={tw`text-zinc-600 hover:text-zinc-900 transition-all`}>Play</span></a>
                    <a href="./contact/index.html" class={tw`hidden md:block`}><span class={tw`text-zinc-600 hover:text-zinc-900 transition-all`}>Contact</span></a>              
                </div>
            </div>
            <div class={tw`flex-none flex flex-col items-center justify-center`}>
                <span>MADHURYA PUTREVU</span>
            </div>
        </header>
        <div class={tw`hidden bg-white absolute top-0 left-0 z-10 w-screen h-screen flex flex-col items-center justify-center space-y-6`} id="dropdown-view">
            <a href="./about/index.html" class={tw``}><span class={tw`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>About</span></a>
            <a href="./work/index.html" class={tw``}><span class={tw`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>Work</span></a>
            <a href="./play/index.html" class={tw``}><span class={tw`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>Play</span></a>
            <a href="./contact/index.html" class={tw``}><span class={tw`text-zinc-600 hover:text-zinc-900 text-3xl transition-all`}>Contact</span></a>              
        </div> 
        <div class={tw`z-0`}>
            test
            this is random data whatever main page
        </div>
    </div>  
    </div>
  );
}

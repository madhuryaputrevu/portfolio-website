/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/header.tsx"

type AppProps = {
    children: preact.ComponentChildren
    pageuri: string
}

export default function App({children, pageuri}: AppProps) {
    return (
    <div class={tw`w-full h-full bg-zinc-50`}>
        <div class={tw`flex flex-col mx-auto container`}>
            <div class={tw``}>
                <Header active={pageuri}/>
            </div>
            <div class={tw`px-5 h-full`}>
                {children}
            </div>
        </div>
    </div>
    );
  }
  
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/header.tsx";

export default function Contact() {
    return (
      <div class={tw`flex flex-col mx-auto container bg-zinc-50`}>
        <Header active={"/contact"}/>
      </div>
    );
  }
  
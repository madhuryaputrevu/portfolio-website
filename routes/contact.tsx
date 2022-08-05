/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/header.tsx";
import App from "../components/app.tsx";


export default function Contact() {
    return (
      <App pageuri={`/contact`}>
          <address>
            email: <a href="mailto:madhuryaputrevu28@gmail.com">madhuryaputrevu28@gmail.com</a>
          </address>
          <p>instagram: <a href="http://instagram.com/_u/madhuryaputrevu">@madhuryaputrevu</a></p>
      </App>
    );
  }
  
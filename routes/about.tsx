/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/header.tsx";
import App from "../components/app.tsx";

export default function About() {
    return (
      <App pageuri={`/about`}>
        <div class={tw`w-full bg-green-500 flex flex-col md:flex-row`}>
          <div class={tw`md:w-1/2 w-full`}>
            <p > 
              <span class={tw`uppercase font-bold`}>
                Hi! I'm Madhurya, a 19-year-old product designer, currently based in New York City
              </span><br/>
                I am an aspiring Product Designer pursuing my BFA  in this field at Parsons school of Design, along with a BA in Psychology from Eugene Lang College of Liberal Arts. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class={tw`md:w-1/2 w-full bg-red-500`}>
            s
          </div>
        </div>
      </App>
    );
  }
  

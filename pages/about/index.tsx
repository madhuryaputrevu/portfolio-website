import { NextPage } from "next";
import Image from "next/image";
import about_image from "../../public/about_image.jpg"

const About: NextPage = () => {
    return (
      <div className={`w-full flex flex-col md:flex-row mx-auto bg-cyan-50`}>
        <div className={`md:w-3/4 w-full md:mx-auto text-left md:text-right md:self-center align-top px-3 pt-3 pb-3`}>
          <p>
            <span className={`uppercase font-bold text-justify`}>
              Hi! I&apos;m Madhurya, <br/> a 19-year-old designer, currently based in New York City
            </span><br/>
              I am a sophomore, pursuing my BFA in Product Design at Parsons School of Design, along with a BA in Psychology from Eugene Lang College of Liberal Arts.
              I love to explore diverse fields from biology to economics and everything in between, and apply what I learn to my design work.
              At the moment, my interests lie in industrial design and user experience design. <br/>
              I have recently been fascinated with material exploration as well.
              More specifically, I love working alongside biomaterials and using approaches such as Biomimicry when I design.
              I&apos;m passionate about learning behaviours, strategies and innovations from nature and applying them to my design practice.
          </p>
        </div>
        <div className={`md:w-1/4 w-3/4 self-center md:mx-auto md:px-3 md:pt-3 md:pb-3`}>
          <Image
            src={about_image}
            alt="Picture of Me"
          />
        </div>
      </div>
  )
}

export default About;
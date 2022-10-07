import { NextPage } from "next";
import Image from "next/image";
import contact_image from "../../public/contact_image.png"

const Contact: NextPage = () => {
        return (
            <div className={`w=full m-h-screen flex flex-row mx-auto`}>
                <div className={`md:w-1/2 h-full md:mx-auto text-left px-3 pt-3 pb-3 space-y-2`}>
                    <address>
                        <a href="mailto:madhuryaputrevu28@gmail.com">madhuryaputrevu28@gmail.com</a>
                    </address>
                    <p>
                        instagram: <a href="http://instagram.com/_u/madhuryaputrevu">@madhuryaputrevu</a>
                    </p>
                </div>
                <div className={`md:w-1/2 md:mx-auto md:px-3 md:pt-3 md:pb-3`}>
                    <Image
                        src={contact_image}
                        alt="Picture of Natural Dyes"
                    />
                </div>
            </div>
        );
}

export default Contact;
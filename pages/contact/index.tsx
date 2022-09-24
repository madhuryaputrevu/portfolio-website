import { NextPage } from "next";

const Contact: NextPage = () => {
        return (
            <div className={'w-full min-h-screen flex flex-col items-center justify-center'}>
                <address>
                    email: <a href="mailto:madhuryaputrevu28@gmail.com">madhuryaputrevu28@gmail.com</a>
                </address>
                <p>
                    instagram: <a href="http://instagram.com/_u/madhuryaputrevu">@madhuryaputrevu</a>
                </p>
            </div>
        );
}

export default Contact;
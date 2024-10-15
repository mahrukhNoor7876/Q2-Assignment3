import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
        <footer className="h-auto w-full bg-gray-500 grid grid-cols-2 lg:grid-cols-4 pb-[50px]">
            <div className="lg:p-[50px] pt-[50px]">
                <h1 className="text-4xl text-white p-[5px] pl-[50px] pr-[50px] font-bold">Educator</h1>
            </div>
            <div className="pt-[50px]">
                <h1 className="text-2xl text-white p-[5px] pl-[50px] pr-[50px] font-bold text-decoration-line:
                underline">Quick Links</h1>
                <ul className="text-[20px] text-white ml-auto pl-[40px]">
                        <li className="p-[10px] mr-[50px] hover:text-blue-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-500">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-500">
                            <Link href="/services">Courses</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-500">
                            <Link href="/services">Blog</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-500">
                            <Link href="/contact">Contact</Link>
                        </li>
                </ul>
            </div>
            <div className="pt-[50px]">
                <h1 className="text-2xl text-white p-[5px] pl-[50px] pr-[50px] font-bold text-decoration-line:
                underline">Address</h1>
                <ul className="text-[19px] text-white ml-auto pl-[40px]">
                        <li className="mt-[20px] gap-3 flex flex-row">
                            <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-black" />
                            <p>Address goes here...</p>
                        </li>
                        <li className="mt-[20px] gap-3 flex flex-row">
                            <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-black" />
                            <p>Address goes here...</p>
                        </li>
                </ul>
            </div>
            <div className="pt-[50px]">
                <h1 className="text-2xl text-white p-[5px] pl-[50px] pr-[50px] font-bold text-decoration-line:
                underline">Social Links</h1>
                <div className="pt-[20px] pl-[50px] flex lg:flex-row flex-wrap gap-5">
                    <FontAwesomeIcon icon={faFacebook} className="h-9 w-9 bg-white text-blue-500 cursor-pointer rounded-full transition-transform duration-300 ease-up-down transform hover:scale-110 hover:shadow-lg"/>
                    <FontAwesomeIcon icon={faInstagram} className="cursor-pointer h-9 w-9 bg-instagram-gradient text-white rounded-md transition-transform duration-300 ease-up-down transform hover:scale-110 hover:shadow-lg"/>
                    <FontAwesomeIcon icon={faLinkedin} className="bg-white text-blue-500 cursor-pointer h-9 w-9 rounded-md transition-transform duration-300 ease-up-down transform hover:scale-110 hover:shadow-lg"/>
                    <FontAwesomeIcon icon={faTwitter} className="text-blue-500 cursor-pointer h-7 w-7 bg-white rounded-full p-[5px] transition-transform duration-300 ease-up-down transform hover:scale-110 hover:shadow-lg"/>
                </div>
            </div>
        </footer>
    );
}
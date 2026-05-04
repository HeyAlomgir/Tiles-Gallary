"use client";
import Image from "next/image";
import logo from "../assets/img/logo.png"
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="w-full py-10 px-6 bg-gray-50 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 ">

                    {/* logo */}

                    <div className="flex flex-col gap-2 max-w-sm">
                        <Image
                            src={logo} width={60} height={30} alt="Logo Img"></Image>
                        <p className="text-gray-500 text-sm">
                            Discover your perfect aesthetic with our premium tile collection.
                            Quality and style in every square.
                        </p>
                    </div>

                    {/* quick link */}

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-gray-800">Company</p>
                            <Link href="/" size="sm" color="foreground">Home</Link>
                            <Link href="/all-tiles" size="sm" color="foreground">All Tiles</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-gray-800">Support</p>
                            <Link href="#" size="sm" color="foreground">Contact Us</Link>
                            <Link href="#" size="sm" color="foreground">FAQs</Link>
                        </div>
                    </div>



                    {/* social */}



                    <div className="flex flex-col items-center ">

                        <p className="text-center font-bold text-xl mb-2">Social</p>

                        <div className="flex gap-3">
                            <Button >
                                <FaFacebook size={62} />
                            </Button>
                            <Button>
                                <FaGithub size={20} />
                            </Button>
                            <Button>
                                <FaTwitter size={20} />
                            </Button>
                            <Button>
                                <FaLinkedin size={20} />
                            </Button>
                        </div>
                    </div>



                </div>

                    <hr className="my-8 border-t border-gray-300 w-full" />


                    {/* copy */}


                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        &copy; Tiles Gallery. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" size="xs" color="foreground">Privacy Policy</Link>
                        <Link href="#" size="xs" color="foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>


        </footer>
    )
};

export default Footer;

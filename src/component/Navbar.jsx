"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import LogoImg from "../assets/img/logo.png";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="shadow-md">
            <nav className="w-full   px-6 py-4 container mx-auto ">
                <div className="flex justify-between items-center">

                    {/*  Logo */}
                    <Link href="/" className="text-xl font-bold">
                        <Image src={LogoImg}
                            alt="Logo IMG"
                            height={10}
                            width={100}
                            className="rounded-full"
                        ></Image>
                    </Link>

                    {/*  Desktop */}
                    <div className="hidden md:flex gap-8 font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/all-tiles">All Tiles</Link>
                        <Link href="/my-profile">My Profile</Link>
                    </div>


                    <div className="hidden md:block ">

                        <div className="flex items-center gap-4">
                            <Link href={"/signIn"}>
                            <Button color="primary">SignIn</Button>
                            </Link>
                            <Link href={"/signUp"}>
                            <Button color="primary">SignUP</Button>
                            </Link>
                           
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        isIconOnly
                        variant="light"
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-60 mt-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-xl">
                        <Link href="/">Home</Link>
                        <Link href="/all-tiles">All Tiles</Link>
                        <Link href="/my-profile">My Profile</Link>

                        <Button color="primary">Login</Button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
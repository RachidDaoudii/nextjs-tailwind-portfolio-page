"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";


function Hero() {

  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(false);
    setEmail(e.target.value);
    
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email == ""){
       setOpen(true);
    } else {
       setOpen(false);
      console.log(email);
      
    }

  }

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Hi.
            I&apos;m Rachid Daoudi, a passionate Full-Stack && Mern-Stack Developer based in Morocco. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="teal" label="Enter your email" type="email" size="lg" required onChange={handleChange}  />
             
              <Button color="gray" className="w-full px-4 md:w-[12rem]" onClick={handleSubmit} >
                require offer
              </Button>
            </div>
          </div>
          {
            open == true ? (<span className="text-red-600 text-sm">
              email is required
            </span>): null
          }
          
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/skills/dev.gif"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

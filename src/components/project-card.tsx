"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  content: string;
  skills?: string[];
  Features?: string[];
  Responsibilities?: any;
  github?: string|"";
}




export function ProjectCard({ img, title, desc, content ,skills,github ,Features, Responsibilities}: ProjectCardProps) {

  const [open, setOpen] = useState(false);

const handleOpen = () => setOpen(!open);
  return (
    <>
    <Card color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {title.slice(0, 25)}...
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500 h-[150px]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {desc}
        </Typography>
        <Button color="gray" size="sm" onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          see details
        </Button>
      </CardBody>
    </Card>

    <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
    <section  className="p-8 h-[80vh] ">
      <div className="overflow-y-auto h-[80vh] dialog">
        <Image
          src={img}
          width={768}
          height={768}
          alt={title}
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-3xl font-bold mb-6 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <div className="font-normal !text-gray-600">
          {content}
        </div>
        
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">App Features and Responsibilities</h1>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            
                <ul className="list-disc pl-6 space-y-2">
                  {Features && Features.map((feature, index) =>  (
                  <li key={index}>{feature}</li>
                  ))}
                </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
            
            <h3 className="text-xl font-medium mb-2">Back-end:</h3>
            <ul className="list-disc pl-6 space-y-2">
                {Responsibilities &&  Responsibilities[0]?.BackEnd.map((responsibility:any, index:any) =>  (
                <li key={index}>{responsibility}</li>
                ))}
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Front-end:</h3>
            <ul className="list-disc pl-6 space-y-2">
                {Responsibilities &&  Responsibilities[0]?.FrontEnd.map((responsibility:any, index:any) =>  (
                <li key={index}>{responsibility}</li>
                ))}
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Deployment:</h3>
            <ul className="list-disc pl-6 space-y-2">
                {Responsibilities &&  Responsibilities[0]?.Deployment.map((responsibility :any, index:any) =>  (
                <li key={index}>{responsibility}</li>
                ))}
            </ul>
          </div>
        </div>
        <Typography
          variant="small" 
          className="font-medium !text-blue-500 my-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          <span className="flex flex-wrap gap-6">{skills && skills.map((skill, index) => (
            <Image
            key={index}
            alt={skill}
            width={100}
            height={100}
            className="w-12 h-12 object-contain"
            title={`${skill}`}
            src={`/skills/${skill}.png`}
          />
          ))}</span>
        </Typography>
        <Typography
          variant="small"
          className="font-medium !text-blue-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          <div className="flex justify-center">
      
          <Link href={github ?? '#'} target="_blank" className="p-2 hover:bg-gray-300 rounded" >
            View on Github  <i className="fa-brands fa-github text-lg" />
          </Link>
          </div>
        </Typography>

      </div>
    </section >
        <DialogFooter className="space-x-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Button variant="text" color="blue-gray" className="close" onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ProjectCard;

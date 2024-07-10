"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "JavaScript",
  "TypeScript",
  "Php",
  "Python",
  "Node-js",
  "React-js",
  "Next-js",
  "Vue-js",
  "Angular",
  "Laravel",
  "wordpress",
  "Nest-js",
  "Express-js",
  "Redux",
  "Redis",
  "RabbitMQ",
  "Aws",
  "Docker",
  "Github Actions",
  "Selenium",
  "robot framework",
  "Jest",
  "mysql",
  "MongoDB",
  "postgreesql",
  "firebase",
  "React Native"
  
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
        My Languages and Tools
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={250}
              height={250}
              className="w-16 h-16 object-contain"
              title={`${logo}`}
              src={`/skills/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;

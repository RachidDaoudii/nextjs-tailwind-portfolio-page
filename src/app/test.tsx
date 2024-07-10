import { IconContainer } from "@/components/IconContainer"
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { SiPostgresql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { Radar } from "@/components/Radar";
export function Test(){
    return(  <div className="relative flex h-[600px] w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer text="Python" delay={0.2}  icon={
                <FaPython className=" h-8 w-8 text-blue-600" />
            }/>
            <IconContainer
              delay={0.4}
              text="JavaScript"
              className="text-gray-600"
              icon={<IoLogoJavascript className=" h-8 w-8 text-yellow-600" />}
            />
            <IconContainer
              text="TypeScript"
              delay={0.3}
              icon={<BiLogoTypescript className=" h-8 w-8 text-blue-600" />}
            />
             <IconContainer
              text="Php"
              delay={0.3}
              icon={<BiLogoPhp className=" h-8 w-8 text-purple-800" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="React js"
              delay={0.2}
              icon={<FaReact className=" h-8 w-8 text-blue-600" />}
            />
            <IconContainer
              text="Next js"
              icon={
                <TbBrandNextjs className=" h-8 w-8 text-slate-600" />
              }
              delay={0.2}
            />
            <IconContainer
              delay={0.5}
              text="Vue js"
              icon={<FaVuejs className=" h-8 w-8 text-green-500" />}
            />
            <IconContainer
              delay={0.2}
              text="Raect Native"
              icon={<TbBrandReactNative className=" h-8 w-8 text-blue-600" />}
            />
            <IconContainer text="Angular" delay={0.1}  icon={
                <FaAngular className=" h-8 w-8 text-red-600" />
            }/>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl ">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            
              <IconContainer
              delay={0.9}
              text="Nest js"
              icon={<SiNestjs className=" h-8 w-8 text-red-600" />}
            />
            <IconContainer
              delay={1}
              text="Express js"
              icon={<SiExpress className=" h-8 w-8 text-slate-600" />}
            />
             <IconContainer
              delay={0.8}
              text="Laravel"
              icon={<FaLaravel className=" h-8 w-8 text-red-600" />}
            />
            <IconContainer
              delay={0.4}
              text="WordPress"
              icon={<FaWordpress className=" h-8 w-8 text-blue-600" />}
            />
            <IconContainer
              delay={0.2}
              text="MongoDB"
              icon={<SiMongodb className=" h-8 w-8 text-green-600" />}
            />
            <IconContainer
              delay={0.4}
              text="Mysql"
              icon={<SiMysql className=" h-8 w-8 text-blue-800" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl ">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            
              <IconContainer
              delay={0.9}
              text="Tailwind css"
              icon={<SiTailwindcss className=" h-8 w-8 text-blue-400 " />}
            />
            <IconContainer
              delay={0.7}
              text="Redux"
              icon={<SiRedux className=" h-8 w-8 text-purple-600" />}
            />
             <IconContainer
              delay={0.6}
              text="Graphql"
              icon={<SiGraphql className=" h-8 w-8 text-pink-600" />}
            />
            <IconContainer
              delay={1}
              text="Jest"
              icon={<SiJest className=" h-8 w-8 text-orange-900" />}
            />
            <IconContainer
              delay={0.1}
              text="Cypress"
              icon={<SiCypress className=" h-8 w-8 text-slate-600" />}
            />
          </div>
          <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            
              <IconContainer
              delay={0.9}
              text="Git"
              icon={<SiGit className=" h-8 w-8 text-orange-800" />}
            />
            <IconContainer
              delay={0.2}
              text="Github"
              icon={<SiGithub className=" h-8 w-8 text-slate-600" />}
            />
             <IconContainer
              delay={1}
              text="Docker"
              icon={<SiDocker className=" h-8 w-8 text-blue-600" />}
            />
            <IconContainer
              delay={0.5}
              text="Aws"
              icon={<FaAws className=" h-8 w-8 text-orange-700" />}
            />

          </div>
          </div>

        </div>




        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <h3 className="text-black text-xl font-bold">
        My Languages and Tools
        </h3>
      </div>
)
}
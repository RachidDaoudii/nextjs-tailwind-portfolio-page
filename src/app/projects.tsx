"use client";
import { ProjectCard } from "@/components";
import { Typography  } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button
} from "@material-tailwind/react";
import { useState } from "react";

const Skills = [
  {
    label:"All",
    value: "all",
  },
  {
    label: "React-js",
    value: "react-js",
  },
  {
    label: "Next-js",
    value: "next-js",
  },
  {
    label: "Vue-js",
    value: "vue-js",
  },
  {
    label:"Angular",
    value: "angular",
  },
  {
   label: "React Native",
   value: "react-native",
  },
  {
   label: "Nest-js",
   value: "nest-js",
  },
  {
    label: "Express-js",
    value: "express-js",
  },
  {
    label: "Laravel",
    value: "laravel",
   },
   {
    label: "Aws",
    value: "aws",
   },
   {
    label: "Github Actions",
    value: "github-actions",
   },
   {
    label: "Docker",
    value: "docker",
   },
 ];
 type ProjectCardProps = {
  img: string;
  title: string;
  desc: string;
  content: string;
  skills: string[];
  Features: string[];
  Responsibilities: {
    BackEnd: string[];
    FrontEnd: string[];
    Deployment: string[];
  }[];
  github: string;
};

const PROJECTS : ProjectCardProps[] = [
  {
    img: "/image/blog-1.svg",
    title: "PharmGarde mobile application",
    desc: "Mobile app designed to help users find the nearest on-call pharmacies using their current location and the Google Maps mapping API.",
    content: "The PharmGarde mobile application aims to assist users in locating nearby on-call pharmacies outside regular hours. It utilizes the Google Maps API to display pharmacy locations and provide navigation.",
    skills: ["Node-js","React Native", "Expo", "Redux"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: "",
  },
  {
    img: "/image/blog2.svg",
    title: "KickOff mobile application",
    desc: "KickOff is a React Native Expo app for football fans, delivering live match updates, player stats, and personalized team tracking in real-time.",
    content :" KickOff is a mobile application crafted using React Native and Expo, designed to provide football enthusiasts with a dynamic platform to stay updated on live football matches. Users can personalize their experience by following favorite teams and players, receiving real-time updates on match scores, and exploring detailed player statistics. Whether tracking ongoing matches or reviewing past performances, KickOff delivers a comprehensive toolset for fans to immerse themselves in the excitement of football action.",
    skills: ["Node-js","React Native", "Expo", "Redux", "Api"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: ""
  },
  {
    img: "/image/blog3.svg",
    title: "A Scalable E-commerce Platform with Microservices (Nest js)",
    desc: "new e-commerce site based on a microservices architecture.",
    content :"It is a new e-commerce platform based on a robust microservices architecture. As a backend developer specialized in TypeScript within a multidisciplinary team, your role is central in the creation and management of essential backend services. These services are dedicated to the management of products, orders, shopping cart and payments.",
    skills: ["Node-js","TypeScript","Nest-js","Docker","MongoDB","Aws","Github Actions"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: ""
  },
  {
    img: "/image/blog4.svg",
    title: "Create application payment management system for each month",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    content :"In your web agency, a client has requested the creation of a system to manage monthly union fee payments. The application should enable property managers to manage apartments and monthly payments, as well as print invoices.",
    skills: ["Node-js", "React-js","Redux" ,"Express-js","MongoDB","Github Actions" ,"Docker"],
    Features:["Manage Apartments: Create, modify, and delete apartments.","Manage Monthly Payments: Create and modify payments for each apartment.","Print Invoices: Generate invoices for each apartment's payment."],
    Responsibilities:[
      {
        BackEnd:["Technologies: Node.js (Express.js), MongoDB." ,"Database Connection: Use Mongoose as the ODM.","Unit Testing: Mandatory for each controller.","Error Handling: Implement middleware for error management.","Security and Authentication: Use JWT for route protection and authentication verification."],
        FrontEnd:["Technologies: React.js.","Hooks: Mandatory use of useState and useEffect.","Routing: Define routes using Nested Routes.","Route Protection: Implement route protection for security.","Global State Management: Use Redux or Context API."],
        Deployment:["Docker: Generate Docker images for both the back-end and front-end and create a network between them."],
      }
    ],
    github: "https://github.com/RachidDaoudii/app_syndicale/tree/dev"
  },
  {
    img: "/image/blog-1.svg",
    title: "Create your first CI/CD pipeline",
    desc: "Set up a complete CI/CD pipeline for the AlloMedia project, including Docker integration, use of GitHub ActionsCI, deployment on AWS, and implementation of automated tests with Unit Test.",
    content :"Set up a complete CI/CD pipeline for the AlloMedia project, including Docker integration, use of GitHub ActionsCI, deployment on AWS, and implementation of automated tests with Unit Test.",
    skills: ["Github Actions", "Aws", "Docker" ,"Jest"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: ""
  },
  {
    img: "/image/blog2.svg",
    title: "AlloMedia Delivery Application",
    desc: "application for the mar7aba restaurant with a home delivery service. Customers will therefore be able to place orders directly from the application and pay before home delivery.",
    content :"Marhaba Delivery is a dedicated mobile application for Marhaba Restaurant, offering a convenient home delivery service. Customers can browse the menu, place orders, and make secure payments all within the app. This application streamlines the ordering process, ensuring a seamless experience for customers looking to enjoy Marhaba's delicious offerings from the comfort of their homes",
    skills: ["Node-js", "javascript", "React-js","Redux", "leaflet-js","Express-js" ,"jwt","MongoDB" , "Jest" ,"Docker"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: ""
  },
  {
    img: "/image/blog3.svg",
    title: "Quizz App",
    desc: "Quiz is an intuitive Vue.js application designed for seamless educational quizzes, fun trivia, or assessment tests, ensuring an engaging user experience.",
    content :"Quizz is an intuitive and dynamic quiz application developed using Vue.js, designed to offer a seamless and engaging user experience. Whether you're looking to create educational quizzes, fun trivia, or assessment tests.",
    skills: ["Vue-js"],
    Features:[
      "User-Friendly Interface : Clean and responsive design ensuring accessibility across devices.",
      "Progress Tracking: Track quiz progress with visual indicators , Score summaries and detailed results at the end of each quiz."
    ],
    Responsibilities:[
      {
        BackEnd:["None"],
        FrontEnd:["Technologies: Vue.js.","Routing: Define routes using Vue Router.","Styling: Implement responsive design with Tailwind CSS."],
        Deployment:["None"],
      }
    ],
    github: ""
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    content :"",
    skills: ["React Native", "Expo", "Redux"],
    Features:[],
    Responsibilities:[
      {
        BackEnd:[],
        FrontEnd:[],
        Deployment:[],
      }
    ],
    github: ""
  },
];



export function Projects() {
  const [selectedTab, setSelectedTab] = useState<ProjectCardProps[]>(PROJECTS);

  const handleTabChange = (e:any) => {
    if(e.target.textContent === "All") return setSelectedTab(PROJECTS);
    setSelectedTab(PROJECTS.filter((project) => project.skills.includes(e.target.textContent)));
    
  };
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>

      <div className="my-4 mx-4 flex justify-center bg-gray-200 px-4 flex-wrap rounded-xl">
          {Skills.map(({ label, value }) => (
            <Button variant="text" key={value} className="mx-4 my-2" onClick={handleTabChange} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {label}
            </Button>
          ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {selectedTab.map(({ img, title, desc, content, skills, github, Features, Responsibilities }, idx) => (
          <ProjectCard key={idx}  
            img={img} 
            title={title} 
            desc={desc} 
            content={content} 
            skills={skills} 
            Features={Features} 
            Responsibilities={Responsibilities} 
            github={github}
          />
        ))}
        <div className="bg-custom-gradient w-96 h-96 rounded-full flex items-center justify-center absolute bottom-[2300px] left-[1300px] transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-bounce-slow" style={{zIndex:-2}}>
        </div>
      </div>
    </section>
  );
}

export default Projects;

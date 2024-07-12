"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
export  function Experience() {
    return (
        <section className="w-full px-8">
        <div className="container w-full flex flex-row-reverse flex-wrap mx-auto mb-20  justify-around items-center relative">

        <div>
            <Typography variant="h2" color="blue-gray" className="mb-4 relative" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            WORK EXPERIENCE
            </Typography>
            <div className="bg-custom-gradient w-80 h-80 rounded-full flex items-center justify-center absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-bounce-slow" style={{zIndex:-2}}>
            </div>
          </div>
          <div className="pt-12 w-[600px]">
            <Timeline>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Internship : Consultant technique e-business | From July 2023 to September 2023 Cegedim Agadir Morocco
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 mt-2">
                    <Typography variant="small"  className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Tasks carried out: <br />
                    Migration of customer invoices from the 'GIS' platform to the 'Sy' platform from
                    test mode to production mode.
                    We have developed a scraper to collect information relating to companies using
                    their VAT number, from the "Company" platform. Next, we carried out a
                    verification of the company's data on various platforms, including the website of
                    "Société", "Verif" and "Le Figaro", with the aim of determining whether the company
                    is in operation or has ceased. its operations.
                    <br />
                    Tools: Python - Django - Tailwind.
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Internship : Devlopper front-end | From May 2023 to July 2023
                    MajorMedia Agadir Morocco
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 mt-2">
                    <Typography variant="small" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      
                    Internal log manager application which allows employee activities to be traced
                    between different states (in meetings / on break, etc.) and generates statistics on
                    hours worked and other integrity KPIs.
                    <br />
                    Tools: typeScript - Reactjs - vsCode - Git - Github - Figma.
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Internship : Devlopper Full-Stack (C# , Asp.net) | May 2022 - May 2022 1 month
                    ACSCBM Agadir Morocco
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8 mt-2">
                    <Typography variant="small" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> 
                    web developer racing pigeon website
                    <br />
                    Tools: Langage de modélisation unifié (UML) - Microsoft SQL Server - Bootstrap - C# -ASP.NET MVC
                    </Typography>
                </TimelineBody>
                </TimelineItem>
            </Timeline>
           </div>
          
        </div>
        
      </section>
    )
}

export default Experience
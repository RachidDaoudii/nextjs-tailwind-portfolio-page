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
export  function Educations() {
    return (
        <section className="w-full  px-8">
        <div className="container w-full flex flex-row flex-wrap mx-auto mb-20  justify-around items-center relative">
          <div>
            <Typography variant="h2" color="blue-gray" className="mb-4 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                DIPLÔMAS AND TRAINING
            </Typography>
            <div className="bg-custom-gradient-2 w-80 h-80 rounded-full flex items-center justify-center absolute top-[100px] right-[1103px] transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-bounce-slow" style={{zIndex:-2}}>
            </div>
          </div>
          <div className="pt-12">
            <Timeline>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Full stack web and Mobile developer 
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small"  className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        From 2022 to 2024 Youcode-UM6P | Simplon Youssoufia, Morocco 
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Technician specialized in IT development
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small"  className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    From 2020 to 2022 Institute of Applied Technology Tafraout, Morocco
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    1st year of study science economics
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small"  className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    From 2018 to 2019 IBN ZOHR University Campus Ait Melloul, Morocco
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                {/* <TimelineConnector /> */}
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Scientific baccalaureate in life and earth science 
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    From 2017 to 2018 High school Al massira Al khadra Massa, Morocco
                    </Typography>
                </TimelineBody>
                </TimelineItem>
                
            </Timeline>
           </div>
        </div>
        
      </section>
    )
}

export default Educations
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from "../../Components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/Components/RenderModel";
import Staff from "@/Components/models/Staff";


export default function Home() {
  return (
    <main>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
    
        <ProjectList projects={projectsData} />

       <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
       <RenderModel>
      <Staff />
    </RenderModel>
       </div>
   
    </main>
  );
}

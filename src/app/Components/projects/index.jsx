import ProjectLayout from "./ProjectLayout"


const ProjectList = ({projects}) => {
    return (
        <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
            {projects.map((project, index) => {
                return <ProjectLayout key={index} {...projects} />
            })}
        </div>
    )
}
export default ProjectList
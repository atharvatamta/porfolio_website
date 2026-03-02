import type { Project } from "~/types.ts";
import ProjectCard from "./project-card";
const FeaturedProjects = ({ projects, count =4 }: { projects: Project[]; count: number }) => {

    const featured = projects.filter((p)=>p.featured === true).slice(0, count);
    return ( <section>
<h2 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>
 ✨ Featured Projects
</h2>
<div className='grid sm:grid-cols-2 gap-6'>
    {featured.map(project => (
        <ProjectCard key={project.id} project={project} />
    ))}
</div>
</section> );
}
 
export default FeaturedProjects;
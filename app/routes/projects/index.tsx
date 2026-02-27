import type { Route } from './+types/index';
import type { Project } from '~/types.ts';
import ProjectCard from '~/components/project-card';
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:3001/projects');
  const data = await res.json();
console.log('Fetched projects:', data);
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  return (
    <>
      <h2 className='text-3xl font-bold mb-8 text-white'>
        🚀 Projects
      </h2>

     
      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
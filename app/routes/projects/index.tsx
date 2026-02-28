import type { Route } from "./+types/index";
import type { Project } from "~/types.ts";
import ProjectCard from "~/components/project-card";
import { useState } from "react";
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();
  console.log("Fetched projects:", data);
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  //calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  // get current page's projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  //pagination buttons
  const renderPagination = () => (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrentPage(idx + 1)}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-200"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-white">🚀 Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {totalPages > 1 && renderPagination()}
    </>
  );
};

export default ProjectsPage;

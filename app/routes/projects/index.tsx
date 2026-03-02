import type { Route } from "./+types/index";
import type { Project } from "~/types.ts";
import ProjectCard from "~/components/project-card";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  //setting an array for  categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  //filtering projects based on category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  console.log(categories);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  //calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  // get current page's projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-white">🚀 Projects</h2>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              // Reset page number to 1 when category is changed
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
      
          layout
          className="grid gap-6 sm:grid-cols-2"
        >
          {currentProjects.map((project) => (
            <motion.div  key={project.id} layout>
            <ProjectCard project={project} />
             </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;

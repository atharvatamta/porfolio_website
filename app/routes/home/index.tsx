import type { Route } from "./+types/index";
import * as React from "react";
import { useState, useEffect } from "react";
import FeaturedProjects from "~/components/featuredProjects";
import type { Project } from "~/types.ts";
export function meta({}: Route.MetaArgs) {
  return [
    // adding a title and description meta tags for SEO
    { title: "portfolio website for me" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();
  console.log("Fetched projects:", data);
  return { projects: data };
}
export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Project[] };
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
}

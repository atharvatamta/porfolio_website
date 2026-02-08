import type { Route } from "./+types/index";


export function meta({}: Route.MetaArgs) {
  return [
    // adding a title and description meta tags for SEO
    { title: " Friendly Dev App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <><div>My App</div></>
}

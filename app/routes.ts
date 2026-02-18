import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  //layout(location of what to dispplay, [nested routes]  )
  layout("routes/layouts/home.tsx",[index("routes/home/index.tsx")]),
  layout('routes/layouts/main.tsx',[route("about", "routes/about/index.tsx"),
  route("contact", "routes/contact/index.tsx"),
  route("projects", "routes/projects/index.tsx"),
  route("blogs", "routes/blogs/index.tsx"),])
  
] satisfies RouteConfig;

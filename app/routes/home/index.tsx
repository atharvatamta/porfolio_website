import type { Route } from "./+types/index";
import * as React from 'react';
import { useState, useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    // adding a title and description meta tags for SEO
    { title: " Friendly Dev App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const now = new Date().toISOString();

  //document and window are not in server and are only in client side
  if (typeof window === "undefined") {
    console.log("server render at", now);
  } else {
    console.log("client hydration at", now);
    //hydration means attached js , event listeners to the static html which is sent by server
  }
  //we can use hooks here and they will only run on client side and not on server side
    //because hooks are only run after client hydration
useEffect(() => {
    console.log(window);//moving this after the useEffect gives us an error because window is not defined in server side and useEffect only runs in client side after hydration
}, []);

  return (
    <>
      <div>My App</div>
    </>
  );
}

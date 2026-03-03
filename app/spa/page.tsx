"use client";
import nextDynamic from "next/dynamic";

const App = nextDynamic(
  () => import("../../frontend/App").then((mod) => mod.App),
  { ssr: false },
);

function SPA() {
  return <App />;
}

export default SPA;

import React, { Suspense } from "react";
import "./App.css";
const Home = React.lazy(() => import("./components/Home"));

export default function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Home />
    </Suspense>
  );
}

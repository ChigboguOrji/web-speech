import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
const Header = React.lazy(() => import("./Header"));
const Panel = React.lazy(() => import("./Panel"));

export default function Home() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
			<Container className="mb-5 my-lg-5">
        <Suspense fallback={"Loading..."}>
          <Panel />
        </Suspense>
      </Container>
    </>
  );
}

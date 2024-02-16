import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Index({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <p id="zero-state">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
    </p>
  );
}

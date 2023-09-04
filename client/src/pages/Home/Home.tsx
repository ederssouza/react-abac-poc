import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>POC - ABAC Front-End Access control</h1>

      <ul>
        <li>
          <Link to="/example-1">Without ABAC</Link>
        </li>

        <li>
          <Link to="/example-2">With ABAC</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

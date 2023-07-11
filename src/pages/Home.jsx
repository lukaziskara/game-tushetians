import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/about">იდეის შესახებ</Link>
          </li>
          <li>
            <Link to="/game">თამაში</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

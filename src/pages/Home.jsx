import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="">
        <Link className="page-button" to="/about-idea">
          იდეის შესახებ
        </Link>
      </div>
      <div className="">
        <Link className="page-button" to="/game">
          თამაში
        </Link>
      </div>
      <div className="">
        <Link className="page-button" to="/about-game">
          თამაშის შესახებ
        </Link>
      </div>
    </div>
  );
}

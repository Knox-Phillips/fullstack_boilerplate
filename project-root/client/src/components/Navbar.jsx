import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/" className="text-blue-600">
        Home
      </Link>
    </nav>
  );
}

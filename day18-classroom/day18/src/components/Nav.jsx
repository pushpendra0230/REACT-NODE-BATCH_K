import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <aside className="bg-gray-100 p-4 w-64 min-h-screen">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/20/20176.png"
                alt="Home"
                className="w-6 h-6"
              />
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/7829/7829847.png"
                alt="Calendar"
                className="w-6 h-6"
              />
              <span className="ml-2">Calendar</span>
            </Link>
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="text-gray-700 font-semibold mb-2">Enrolled</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/cpp-intermediate"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665899.png"
                  alt="Cpp Intermediate"
                  className="w-6 h-6"
                />
                <span className="ml-2">Cpp Intermediate 1</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cpp-session-r"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665923.png"
                  alt="CPP Session Batch R"
                  className="w-6 h-6"
                />
                <span className="ml-2">CPP SESSION Batch R</span>
              </Link>
            </li>
            <li>
              <Link
                to="/react-node-batch-k"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8142/8142665.png"
                  alt="REACT NODE Batch K"
                  className="w-6 h-6"
                />
                <span className="ml-2">REACT NODE Batch K</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cpp-session-q"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665899.png"
                  alt="CPP Session Batch Q"
                  className="w-6 h-6"
                />
                <span className="ml-2">CPP Session Batch Q</span>
              </Link>
            </li>
            <li>
              <Link
                to="/frontend"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8142/8142752.png"
                  alt="Frontend Batch N"
                  className="w-6 h-6"
                />
                <span className="ml-2">Frontend Batch N</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cpp-physical-jp"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665923.png"
                  alt="CPP (I/J) Physical JP"
                  className="w-6 h-6"
                />
                <span className="ml-2">CPP (I/J) Physical JP</span>
              </Link>
            </li>
            <li>
              <Link
                to="/logical-sessions"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9313/9313197.png"
                  alt="C - LOGICAL SESSIONS"
                  className="w-6 h-6"
                />
                <span className="ml-2">C - LOGICAL SESSIONS</span>
              </Link>
            </li>
            <li>
              <Link
                to="/linux-git-sessions"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665947.png"
                  alt="LINUX/GIT SESSIONS"
                  className="w-6 h-6"
                />
                <span className="ml-2">LINUX/GIT SESSIONS</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/archived"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10405/10405563.png"
                  alt="Archived Classes"
                  className="w-6 h-6"
                />
                <span className="ml-2">Archived Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/61/61094.png"
                  alt="Settings"
                  className="w-6 h-6"
                />
                <span className="ml-2">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
export default Nav;
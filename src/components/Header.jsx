
// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        
        <div className="flex items-center gap-4">
          <Link to="/" className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-lg font-black text-lg hover:bg-blue-600 transition-colors">
            TS
          </Link>
          
          <div className="hidden sm:flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded w-fit">
              Reconversion
            </span>
            <div className="flex items-center gap-2 px-2 py-0.5 bg-green-50 border border-blue-100 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-tighter">
                En recherche d'alternance
              </span>
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-gray-500">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-gray-900"}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-gray-900"}>
              Parcours
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-gray-900"}>
              Projets
            </NavLink>
          </li>
          <li>
            <Link to="/contact">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all text-[11px] font-bold">
                CONTACT
              </button>
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
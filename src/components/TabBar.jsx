import { NavLink } from 'react-router-dom';

export default function TabBar() {
  return (
    <nav className="flex justify-around bg-gray-200 p-3 shadow-md">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
        Home
      </NavLink>
      <NavLink to="/trips" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
        Trips
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
        Profile
      </NavLink>
    </nav>
  );
}
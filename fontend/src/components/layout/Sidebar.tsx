import { NavLink } from 'react-router-dom'

const menus = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Users',
    path: '/users',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'Settings',
    path: '/settings',
  },
]

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-4 hidden md:block">
      <h2 className="mb-6 text-xl font-bold text-white">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        {menus.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-2 transition ${
                isActive
                  ? 'bg-cyan-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
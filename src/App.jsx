// App2/src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";

function Products() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-4 rounded-lg bg-purple-50">
          <h3 className="mb-2 font-semibold">Product 1</h3>
          <p>Product description here</p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50">
          <h3 className="mb-2 font-semibold">Product 2</h3>
          <p>Product description here</p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50">
          <h3 className="mb-2 font-semibold">Product 3</h3>
          <p>Product description here</p>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Analytics</h2>
      <div className="p-4 rounded-lg bg-indigo-50">
        <h3 className="mb-2 font-semibold">Performance Metrics</h3>
        <p>Sample analytics data here</p>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Reports</h2>
      <div className="p-4 rounded-lg bg-pink-50">
        <h3 className="mb-2 font-semibold">Generated Reports</h3>
        <p>Sample reports page</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white rounded-lg shadow">
      <nav className="border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex space-x-4">
            <NavLink
              to="/app2"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/app2/analytics"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Analytics
            </NavLink>
            <NavLink
              to="/app2/reports"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Reports
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

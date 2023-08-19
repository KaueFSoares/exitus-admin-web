import Header from "./components/layout/Header.tsx";
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div id="App">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
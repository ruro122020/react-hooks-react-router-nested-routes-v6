import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
function App() {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error))
  },[])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
};

export default App;

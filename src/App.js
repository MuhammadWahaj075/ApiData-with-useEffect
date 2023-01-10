import React, { useEffect, useState } from "react";
import User from "./User";
// import './App.css';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) =>
        res.json().then((json) => {
          setUser(json);
          console.log("response==========", response);
        })
    );
  };
  return (
    <div className="App">
      {user.map((item, i) => (
        <User user={item.name} username={item.username} key={i} />
      ))}
    </div>
  );
}

export default App;

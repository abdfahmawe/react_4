import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "tariq", email: "tariq@gmail.com" },
    { id: "2", name: "abd", email: "abd@gmail.com" },
    { id: "3", name: "zeina", email: "zeina@gmail.com" },
    { id: "4", name: "soso", email: "soso@gmail.com" },
  ]);
  return (
    <div className="Users ">
      {users.map(function (user) {
        return (
          <div className="user">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

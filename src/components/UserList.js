import React from "react";
import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) => setUsers(data.results))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      {users.map((user, idx) => {
        return (
          <ul>
            <li key={idx}>
              <SingleUser user={user} />
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default UserList;

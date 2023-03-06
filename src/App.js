import { useState, useEffect } from "react";
import SingleUser from "./components/SingleUser";
import UserList from "./components/UserList";
function App() {
  return (
    <div>
      <SingleUser />
      <UserList />
    </div>
  );
}

export default App;

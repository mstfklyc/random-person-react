import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";


function SingleUser({ user }) {
  return (
    <main className="main-center">
      <section className="container">

        {user ? <img src={user.picture.large} className="person-img" /> : null}



        <div className="user-info">
          {user ? (
            <h4>
              {user.name.first} {user.name.last}{" "}
            </h4>
          ) : null}
          {user ? (
            <p>
              <AiOutlineMail />  {user.email}
            </p>
          ) : null}

          {user ? (
            <p>
              <AiOutlinePhone /> : {user.phone}
            </p>
          ) : null}
          {user ? (
            <p>
              <CiLocationOn /> : {user.location.country}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default SingleUser;

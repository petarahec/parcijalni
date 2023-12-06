import React from "react";

const Podaci = ({ user, repositories }) => {
  return (
    <div>
      {user && (
        <div>
          <h2>Podaci</h2>
          <img src={user.avatar_url} alt="User Avatar" />
          <p>Name: {user.name}</p>
          <p>Location: {user.location}</p>
          <p>Bio: {user.bio}</p>
        </div>
      )}

      {repositories && (
        <div>
          <h2>Repozitoriji</h2>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Podaci;

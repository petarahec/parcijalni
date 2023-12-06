import React, { useState } from "react";

import Podaci from "./Components/Podaci";
import Forma from "./Components/Forma";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState(null);

  const searchUser = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setUserData(userData);

      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repoData = await repoResponse.json();
      setRepositories(repoData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <Forma onSearch={searchUser} />
      <Podaci user={userData} repositories={repositories} />
    </div>
  );
};

export default App;

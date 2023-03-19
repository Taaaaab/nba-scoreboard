import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <h1>Games</h1>
      {typeof backendData.games === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.games.map((game, i) => (
          <div key={i}>
            <h3>
              {game.awayTeam.score}
              &nbsp;
              {game.homeTeam.score}
            </h3>
            {game.awayTeam.teamName} at {game.homeTeam.teamName}
            <p>
              {game.awayTeam.wins}-{game.awayTeam.losses}
              &nbsp;
              {game.homeTeam.wins}-{game.homeTeam.losses}
            </p>
            <h4 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
              game leaders
            </h4>
            <h5>{game.gameLeaders.awayLeaders.name}</h5>
          </div>
        ))
      )}
    </div>
  );
}

export default App;

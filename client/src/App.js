import React, { useEffect, useState } from "react";
import "./App.css";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "1rem",
        margin: "0 auto",
        backgroundColor: "rgb(246, 246, 246)",
        width: "100vw",
      }}
    >
      <h1>Today's Games</h1>
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
          gap: "1rem",
        }}
      >
        {typeof backendData.games === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.games.map((game, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: ".5rem",
              }}
            >
              <div
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      {game.awayTeam.score}
                    </span>
                    <span>{game.awayTeam.teamName}</span>
                    <span>
                      {game.awayTeam.wins}-{game.awayTeam.losses}
                    </span>
                  </div>
                  <div
                    style={{
                      alignSelf: "center",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  >
                    {game.gameStatusText}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      {game.homeTeam.score}
                    </span>
                    <span>{game.homeTeam.teamName}</span>
                    <span>
                      {game.homeTeam.wins}-{game.homeTeam.losses}
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  width: "95%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginBottom: "1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    game leaders
                  </div>
                  <div style={{ marginLeft: "1rem" }}>PTS REB AST</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "solid 2px #eee",
                    paddingTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "1rem" }}>
                      {game.gameLeaders.awayLeaders.name}
                    </span>
                    <div>
                      <small>
                        {game.gameLeaders.awayLeaders.teamTricode} |{" "}
                      </small>
                      <small>
                        #{game.gameLeaders.awayLeaders.jerseyNum} |{" "}
                      </small>
                      <small>{game.gameLeaders.awayLeaders.position}</small>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto",
                      gap: "1rem",
                    }}
                  >
                    <span>{game.gameLeaders.awayLeaders.points}</span>
                    <span>{game.gameLeaders.awayLeaders.rebounds}</span>
                    <span>{game.gameLeaders.awayLeaders.assists}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "solid 2px #eee",
                    paddingTop: "5px",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "1rem" }}>
                      {game.gameLeaders.homeLeaders.name}
                    </span>
                    <div>
                      <small>
                        {game.gameLeaders.homeLeaders.teamTricode} |{" "}
                      </small>
                      <small>
                        #{game.gameLeaders.homeLeaders.jerseyNum} |{" "}
                      </small>
                      <small>{game.gameLeaders.homeLeaders.position}</small>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto",
                      gap: "1rem",
                    }}
                  >
                    <span>{game.gameLeaders.homeLeaders.points}</span>
                    <span>{game.gameLeaders.homeLeaders.rebounds}</span>
                    <span>{game.gameLeaders.homeLeaders.assists}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

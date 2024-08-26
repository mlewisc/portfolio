import Navbar from "../Navbar";

export default function Portfolio() {
  return (
    <>
      <main>
        <section style={{ height: "unset" }}>
          <Navbar />
          <div
            className="align-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              className="h3-semibold align-center grey padding-block"
              style={{
                fontSize: "2rem",
                fontWeight: "500",
                marginTop: "10rem",
              }}
            >
              This portfolio was designed and coded by me using React
            </p>
            <a href="/#projects">
              <button className="chip">Explore projects</button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

import portfolios from "../data/portfolios.json";

const Portfolio = () => {
  const totalProject = portfolios.web.length + portfolios.design.length;
  console.log(portfolios);
  return (
    <div>
      <h1>Total: {totalProject}</h1>
      <hr />
      <h1>Web App :{portfolios.web.length}</h1>

      {portfolios.web.map((w) => (
        <div>
          <div className="portfolio-container">
            <img src={w.logo} alt="logo" />
            <div>
              <a href={w.src} target="_blank" rel="noreferrer">
                <h3 style={{ margin: "0px" }}>{w.name}</h3>
              </a>
              <p>{w.description}</p>
              <div className="tools">
                {w.tools.map((t) => (
                  <div>
                    <h6>{t.name}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="design-container">
        <h1>Design Graphic :{portfolios.design.length}</h1>
        {portfolios.design.map((d) => (
          <div key={d.id}>
            <h1>{d.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

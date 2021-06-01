import portfolios from "../data/portfolios.json";

const Portfolio = () => {
  const totalProject = portfolios.web.length + portfolios.design.length;

  return (
    <div className="lg:w-4/5 sm:w-full mx-auto">
      <h1>Total: {totalProject}</h1>
      <hr />
      <h1>Web App :{portfolios.web.length}</h1>

      {portfolios.web.map((w) => (
        <div className="shadow-lg rounded m-2 px-4">
          <div className="flex">
            <img
              src={w.logo}
              alt="logo"
              style={{ width: "100px", height: "100px" }}
              className="my-auto"
            />
            <div className="mx-4 py-4">
              <a href={w.src} target="_blank" rel="noreferrer">
                <h3 className="font-bold">{w.name}</h3>
              </a>
              <p>{w.description}</p>
              <div className="flex flex-wrap">
                {w.tools.map((t) => (
                  <div className="m-1">
                    <h6 className="bg-green-400 text-white p-1 px-2 text-xs rounded-xl">
                      {t.name}
                    </h6>
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

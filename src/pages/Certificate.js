import certificates from "../data/certficates.json";

const Certificate = () => {
  return (
    <div>
      {certificates.certificates.map((x, y) => (
        <div className="sertifikat-container">
          <div>
            <h1 className="sertifikat-title">{x.name}</h1>
            <h1 className="sertifikat-from">{x.from}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;

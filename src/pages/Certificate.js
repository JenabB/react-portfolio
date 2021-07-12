import certificates from '../data/certficates.json';

const Certificate = () => {
  return (
    <div className="w-full shadow-sm py-4">
      {certificates.certificates.map((x, index) => (
        <div className="shadow rounded m-2 p-4" key={index}>
          <div>
            <h1 className="text-lg text-green-800">{x.name}</h1>
            <h2 className="">{x.from}</h2>
            <h3 className="">{x.event}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;

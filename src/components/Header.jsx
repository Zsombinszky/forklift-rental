import forkliftSvg from "../assets/forklift.svg";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="mx-auto px-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
          <img src={forkliftSvg} alt="Forklift logo" className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">
          Welcome in the forklift rental!
        </h1>
        <p className="text-blue-100 text-center">
          You can now rent our quality forklifts at a favorable price
        </p>
      </div>
    </header>
  );
};

export default Header;

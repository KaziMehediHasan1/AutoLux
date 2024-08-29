const Join = () => {
  return (
    <div className="max-w-[500px] mx-auto mt-16">
      <h1 className="text-center font-primary font-bold text-4xl">
        Join BoxCar
      </h1>
      <p className="font-primary font-medium text-center text-gray-500 mt-2">
        Receive pricing updates, shopping tips & more!
      </p>
      <div className="input input-bordered flex items-center mt-4 max-w-[350px] mx-auto md:max-w-[500px]">
        <input type="text" className="grow" placeholder="Search" />
        <button className="bg-blue-500 py-2 px-4 text-white font-primary rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Join;

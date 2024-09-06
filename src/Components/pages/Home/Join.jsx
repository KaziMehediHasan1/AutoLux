const Join = () => {
  
  return (
    <div className="max-w-[500px] mx-auto mt-16 mb-8">
      <h1 className="text-center font-primary font-bold text-4xl">
        Join BoxCar
      </h1>
      <p className="font-primary font-medium text-center text-gray-500 mt-2">
        Receive pricing updates, shopping tips & more!
      </p>
      {/* button */}

      <form className="mt-5 px-8 md:px-0">
        <div class="relative ">
          <input
            type="text"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="subscribe"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;

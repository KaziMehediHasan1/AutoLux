import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black p-8">
      <div className="lg:flex container mx-auto">
        <div className="mt-6 lg:mt-0 lg:flex-1 items-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* first section */}
            <div>
              <h3 className="text-white uppercase  text-2xl font-semibold">
                Company
              </h3>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200  hover:underline"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Services
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Contact Us
              </Link>
            </div>

            {/* second section */}
            <div>
              <h3 className="text-white uppercase dark:text-white text-2xl font-semibold">
                Quick Links
              </h3>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Help center
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Live chat
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                How it works
              </Link>
            </div>

            {/* third section */}
            <div>
              <h3 className="text-white uppercase dark:text-white text-2xl font-semibold">
                Our Brands
              </h3>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Toyota
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Porsche
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Audi
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                BMW
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Ford
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Nissan
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Peugeot
              </Link>
              <Link
                href="#"
                className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline"
              >
                Volkswagen
              </Link>
            </div>

            {/* fourth section */}
            <div>
              <h3 className="text-white uppercase dark:text-white text-2xl font-semibold">
                Vehicles Type
              </h3>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Sedan
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Hatchback
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                SUV
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Hybrid
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Electric
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Coupe
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Truck
              </span>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Convertible
              </span>
            </div>
            {/* fifth section */}
            <div>
              <h3 className="text-white uppercase dark:text-white text-2xl font-semibold">
                Sale Hours
              </h3>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                Monday – Friday: 09:00AM – 09:00 PM Saturday: 09:00AM – 07:00PM
                Sunday: Closed
              </span>
              <h1 className="block mt-2 text-2xl font-semibold   text-gray-200 dark:text-gray-400 hover:underline">
                Connect With Us
              </h1>
              <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
                SUV
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-6 w-full bg-gray-200 border-none dark:bg-gray-700" />

      <div className="flex justify-around p-3">
        <p className="text-center text-gray-200 dark:text-gray-400">
          © AutoLux 2024 - All rights reserved
        </p>
        <p className="text-center text-gray-200 dark:text-gray-400">
          Terms & Conditions - AutoLux BD
        </p>
        <a href="https://lordicon.com/" className="text-center text-gray-200 dark:text-gray-400">Icons by Lordicon.com</a>
      </div>
    </footer>
  );
};

export default Footer;

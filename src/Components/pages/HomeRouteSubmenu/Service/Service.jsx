import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icon1 from "../../../../assets/f1.svg.svg";
import icon2 from "../../../../assets/f2.svg.svg";
import icon3 from "../../../../assets/f3.svg.svg";
import icon4 from "../../../../assets/f4.svg.svg";
const Service = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // adjusted breakpoint for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-28 font-primary px-4 sm:px-6 lg:px-8">
      <div className="lg:flex items-center justify-between bg-white p-8">
        {/* Text Content */}
        <div className="max-w-lg mb-5 text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold mb-4">
            Service Option Offered by BoxCar
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Choose from thousands of vehicles from multiple brands and buy
            online with Click & Drive, or visit us at one of our dealerships
            today.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            See your service options
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-[420px] lg:w-[400px] mx-auto lg:mx-0">
          <img
            src="https://i.ibb.co/K0v3ZWz/service1-jpg.png"
            alt="Car Service"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* benefit */}
      <div className="max-w-screen-2xl mx-auto bg-[#f4f7f8] p-14 mt-10 mb-10 rounded-md font-primary">
        <h1 className="text-4xl font-bold">Customers Get Great benefits!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-10">
          <div className="space-y-2">
            <img src={icon1} alt="" />

            <h1 className="text-xl font-semibold text-gray-600">
              Special Financing Offers
            </h1>
            <p className="text-gray-600">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
          <div className="space-y-2">
            <img src={icon2} alt="" />
            <h1 className="text-xl font-semibold text-gray-600">
              Trusted Car Dealership
            </h1>
            <p className="text-gray-600">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
          <div className="space-y-2">
            <img src={icon3} alt="" />
            <h1 className="text-xl font-semibold text-gray-600">
              Transparent Pricing
            </h1>
            <p className="text-gray-600">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
          <div className="space-y-2">
            <img src={icon4} alt="" />
            <h1 className="text-xl font-semibold text-gray-600">
              Expert Car Service
            </h1>
            <p className="text-gray-600">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
        </div>
      </div>
      {/* Services Cards */}
      <h1 className="text-4xl font-semibold mb-8 text-center lg:text-left">
        Our Services
      </h1>
      <Slider {...settings} className="mt-10">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-2">
            <div className="max-w-[320px] mx-auto shadow-lg">
              <img
                src="https://cdn.motor1.com/images/mgl/pEYGg/s1/bmw-545e-xdrive-sedan.jpg"
                className="rounded-t-lg w-full"
              />
              <div className="bg-white py-4 px-3 space-y-1">
                <h1 className="text-2xl font-semibold">
                  Title here this section
                </h1>
                <p className="text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, architecto.
                </p>
                <Link to="#" className="text-blue-500">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 mt-20 font-primary">
        {/* form */}
        <div className="px-8 shadow-md rounded-lg bg-[#f4f7f8] py-10 col-span-2">
          <h1 className="text-3xl font-semibold">Schedule Service</h1>
          <p className="text-sm py-2 text-gray-500">
            Use our loan calculator to calculate payments over the life of your
            loan. Enter your information to see how much your monthly payments
            could be. You can adjust length of loan, down payment, and interest
            rate to see how those changes raise or lower your payments.
          </p>
          <form className="mt-4">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="tel"
                  placeholder="+88"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
                <input
                  type="text"
                  placeholder="Make Model"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Mileage (optional)"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
                <input
                  type="date"
                  placeholder="Date-time"
                  className="w-full md:w-1/2 px-5 py-2 rounded-lg border-2"
                />
              </div>
            </div>
            <button className="border bg-blue-600 px-5 py-2 my-4 text-white w-full rounded-lg">
              Request a Service
            </button>
            <p>
              By submitting this form you will be scheduling a service
              appointment at no obligation and will be contacted within 48 hours
              by a service advisor.
            </p>
          </form>
        </div>
        {/* contact details */}
        <div className="mt-10 lg:mt-0 lg:space-x-20 space-y-8">
          <div className="lg:max-w-[330px] h-[350px]  bg-white shadow-lg mx-auto lg:mx-0 rounded-lg capitalize p-5 space-y-4">
            <h1 className="text-xl font-semibold">Opening hours</h1>
            <div className="flex justify-between">
              <p>Sunday</p>
              <p>8:00 - 12:00</p>
            </div>
            <div className="flex justify-between">
              <p>Monday</p>
              <p>8:00 - 17:00</p>
            </div>
            <div className="flex justify-between">
              <p>Tuesday</p>
              <p>8:00 - 17:00</p>
            </div>
            <div className="flex justify-between">
              <p>Wednesday</p>
              <p>8:00 - 17:00</p>
            </div>
            <div className="flex justify-between">
              <p>Thursday</p>
              <p>8:00 - 17:00</p>
            </div>
            <div className="flex justify-between">
              <p>Friday</p>
              <p>8:00 - 17:00</p>
            </div>
            <div className="flex justify-between">
              <p>Saturday</p>
              <p>8:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

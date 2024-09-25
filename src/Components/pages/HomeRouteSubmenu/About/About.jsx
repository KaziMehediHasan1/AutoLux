import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="max-w-[1320px] mx-auto md:mt-28 mt-20 font-primary">
      <Helmet>
        <title>AutoLux | About</title>
      </Helmet>
      <p className="text-center font-semibold mb-10 md:text-4xl bg-slate-50 py-5 md:rounded-lg">
        We Value Our Clients And Want Them <br /> To Have A Nice Experience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 lg:px-0">
        {/* First Column (Spanning 2 rows)  */}
        <div className="col-span-1  md:bg-blue-500 flex items-center md:rounded-lg justify-center md:text-white">
          <p className="text-center text-4xl  font-semibold">
            45 <br /> Years in <br /> Business
          </p>
        </div>

        {/* Second Column (Spanning 2 rows) */}
        <div className="col-span-1 lg:row-span-2 lg:col-span-2">
          <img
            src="https://i.ibb.co/q7BN1kf/g2-jpg.png" // Replace with actual image path
            alt="Man with Tablet"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Third Column  */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://i.ibb.co/L0Wsq6Q/g1-jpg.png" // Replace with actual image path
            alt="Showroom Image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Fourth Column  */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://i.ibb.co/hY1x57t/g4-jpg.png" // Replace with actual image path
            alt="Handshake Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 lg:col-auto">
          <img
            src="https://i.ibb.co/cJS83WY/g5-jpg.png" // Replace with actual image path
            alt="Showroom Image"
            className="h-80 lg:h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
      {/* video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 lg:gap-x-20 gap-14 bg-blue-50 p-14 rounded-lg">
        <iframe
          className="rounded-lg w-full"
          width="600"
          height="320"
          src="https://www.youtube.com/embed/kg2QkkcMreQ?si=N2LbDHb7hfQ3RDV8"
          title="SUV car "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* ul */}
        <div className="space-y-5 ">
          <h2 className="font-semibold text-3xl">
            Get A Fair Price For Your Car <br />
            Sell To Us Today
          </h2>
          <p className="text-gray-600">
            We are committed to providing our customers with exceptional
            service, competitive <br /> pricing, and a wide range of.
          </p>
          <ul className="space-y-5 list-none">
            <li className="before:content-['✓'] before:bg-white before:px-2 before:py-1 before:rounded-full before:mr-3">
              We are the UK’s largest provider, with more patrols in more places
            </li>
            <li className="before:content-['✓'] before:bg-white before:px-2 before:py-1 before:rounded-full before:mr-3">
              You get 24/7 roadside assistance
            </li>
            <li className="before:content-['✓'] before:bg-white before:px-2 before:py-1 before:rounded-full before:mr-3">
              We fix 4 out of 5 cars at the roadside
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <section className=" mt-10 text-gray-800 p-10 container  mx-auto">
        <div className="max-w-screen-lg mx-auto px-4 py-8  md:p-8 font-uiFont">
          <h2 className="text-2xl font-semibold sm:text-4xl pb-4 text-center">
            Autolux Car Dealership FAQ
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-center">
            This FAQ section is designed to answer common questions potential
            customers might have when considering a vehicle purchase from
            Autolux, providing clarity on the services and options available.
          </p>
          <div className="space-y-4">
            <details className="w-full border-2 rounded-lg ">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                What types of vehicles does Autolux offer?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Autolux offers a wide range of vehicles, including new and
                pre-owned cars, trucks, SUVs, and luxury vehicles. We carry
                models from top brands like Toyota, Ford, BMW, Mercedes-Benz,
                and more.
              </p>
            </details>
            <details className="w-full border-2 rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                Does Autolux offer warranties on pre-owned vehicles?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Yes, we offer extended warranties and protection plans for our
                pre-owned vehicles. These plans are designed to provide peace of
                mind and cover unexpected repairs after your purchase.
              </p>
            </details>
            <details className="w-full border-2 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                Can I access Planet articles offline?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Yes, Autolux has a full-service maintenance and repair
                department. Our certified technicians are equipped to handle
                everything from routine oil changes and tire rotations to more
                complex repairs
              </p>
            </details>
            <details className="w-full border-2 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                Can I buy a car online and have it delivered?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Yes, Autolux offers a convenient online buying process. You can
                browse our inventory, get pre-approved for financing, and even
                schedule delivery of your new vehicle, all from the comfort of
                your home.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div> 
  );
};

export default About;

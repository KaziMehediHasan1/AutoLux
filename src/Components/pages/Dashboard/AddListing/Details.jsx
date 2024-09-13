import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const handledSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const label = form.label.value;
    const condition = form.condition.value;
    const type = form.type.value;
    const make = form.make.value;
    const model = form.model.value;
    const year = form.year.value;
    const offer = form.offer.value;
    const drive = form.drive.value;
    const transmission = form.transmission.value;
    const fuel = form.fuel.value;
    const mileage = form.mileage.value;
    const engine = form.engine.value;
    const cylinder = form.cylinder.value;
    const color = form.color.value;
    const door = form.door.value;
    const vin = form.vin.value;
    const price = form.price.value;
    const description = form.description.value;
    const listing = {
      title,
      category,
      label,
      condition,
      type,
      make,
      model,
      year,
      offer,
      drive,
      transmission,
      fuel,
      mileage,
      engine,
      cylinder,
      color,
      door,
      vin,
      price,
      description,
    };
    if (listing) {
      navigate("/dashboard/add-listing/feature");
      toast.success("car details successfully Field-Up");
    }
    localStorage.setItem("car-detail", JSON.stringify(listing));
  };
  // console.log(detail, "73 no line checking");
  return (
    <div className="mt-5 px-8">
      {/* step 01 */}
      <form onSubmit={handledSubmit}>
        <div className="grid grid-cols-3 gap-5">
          {" "}
          <div className="flex flex-col">
            <label className="text-gray-700">Listing Title</label>
            <select
              name="title"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select One</option>
              <option value="Sporty Sedan">Sporty Sedan</option>
              <option value="Family SUV">Family SUV</option>
              <option value="Off-Road Truck">Off-Road Truck</option>
              <option value="Luxury Car">Luxury Car</option>
              <option value="Compact Hatchback">Compact Hatchback</option>
            </select>
          </div>
          {/* category */}
          <div className="flex flex-col">
            <label className="text-gray-700">Category</label>
            <select
              name="category"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select category</option>
              <option value="cars">Cars</option>
              <option value="bikes">Bikes</option>
              <option value="trucks">Trucks</option>
            </select>
          </div>
          {/* Label */}
          <div className="flex flex-col">
            <label className="text-gray-700">Label</label>
            <select
              name="label"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select a Label</option>
              <option value="Featured">Featured</option>
              <option value="Best Seller">Best Seller</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Clearance">Clearance</option>
            </select>
          </div>
          {/* Condition */}
          <div className="flex flex-col">
            <label className="text-gray-700">Condition</label>
            <select
              name="condition"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Certified Pre-Owned">Certified Pre-Owned</option>
              <option value="Salvage">Salvage</option>
              <option value="Rebuilt">Rebuilt</option>
            </select>
          </div>
          {/* type */}
          <div className="flex flex-col">
            <label className="text-gray-700">Type</label>
            <select
              name="type"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select type</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Convertible">Convertible</option>
              <option value="Wagon">Wagon</option>
            </select>
          </div>
          {/* make */}
          <div className="flex flex-col">
            <label className="text-gray-700">Make</label>
            <select
              name="make"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
          </div>
          {/* model */}
          <div className="flex flex-col">
            <label className="text-gray-700">Model</label>
            <select
              name="model"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Model</option>
              <option value="Camry">Camry</option>
              <option value="F-150">F-150</option>
              <option value="Civic">Civic</option>
              <option value="3 Series">3 Series</option>
              <option value="Mercedes-Benz">C-Class</option>
            </select>
          </div>
          {/* Year */}
          <div className="flex flex-col">
            <label className="text-gray-700">Year</label>
            <select
              name="year"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          {/* Offer Type: */}
          <div className="flex flex-col">
            <label className="text-gray-700">Offer Type</label>
            <select
              name="offer"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Offer</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="Lease">Lease</option>
              <option value="Auction">Auction</option>
              <option value="Trade-in">Trade-in</option>
            </select>
          </div>
          {/* Drive type */}
          <div className="flex flex-col">
            <label className="text-gray-700">Drive Type</label>
            <select
              name="drive"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Drive type</option>
              <option value="Front-Wheel Drive (FWD)">
                Front-Wheel Drive (FWD)
              </option>
              <option value="Rear-Wheel Drive (RWD)">
                Rear-Wheel Drive (RWD)
              </option>
              <option value="All-Wheel Drive (AWD)">
                All-Wheel Drive (AWD)
              </option>
              <option value="Four-Wheel Drive (4WD)">
                Four-Wheel Drive (4WD)
              </option>
              <option value="Part-Time 4WD">Part-Time 4WD</option>
            </select>
          </div>
          {/* Transmission: */}
          <div className="flex flex-col">
            <label className="text-gray-700">Transmission</label>
            <select
              name="transmission"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
              <option value="CVT">CVT</option>
              <option value="Dual-Clutch">Dual-Clutch</option>
            </select>
          </div>
          {/* Fuel Type: */}
          <div className="flex flex-col">
            <label className="text-gray-700">Fuel Type</label>
            <select
              name="fuel"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Fuel Type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="LPG">LPG</option>
            </select>
          </div>
          {/* Mileage: */}
          <div className="flex flex-col">
            <label className="text-gray-700">Mileage</label>
            <select
              name="mileage"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Mileage</option>
              <option value="10000">10000</option>
              <option value="20,000">20,000</option>
              <option value="50,000">50,000</option>
              <option value="75,000">75,000</option>
              <option value="100,000">100,000</option>
            </select>
          </div>
          {/* Engine Size */}
          <div className="flex flex-col">
            <label className="text-gray-700">Engine Size</label>
            <select
              name="engine"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Engine Size</option>
              <option value="1.5L">1.5L</option>
              <option value="2.0L">2.0L</option>
              <option value="2.5L">2.5L</option>
              <option value="3.0L">3.0L</option>
              <option value="4.0L">4.0L</option>
            </select>
          </div>
          {/* Cylinder */}
          <div className="flex flex-col">
            <label className="text-gray-700">Cylinder</label>
            <select
              name="cylinder"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Cylinder</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col">
            <label className="text-gray-700">Color</label>
            <select
              name="color"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          {/* door */}
          <div className="flex flex-col">
            <label className="text-gray-700">Door</label>
            <select
              name="door"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select Door</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          {/* VIN */}
          <div className="flex flex-col">
            <label className="text-gray-700">VIN</label>
            <select
              name="vin"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Select VIN</option>
              <option value="1HGCM82633A123456">1HGCM82633A123456</option>
              <option value="2T3ZF4DV7BW123456">2T3ZF4DV7BW123456</option>
              <option value="5J6RE4H37BL123456">5J6RE4H37BL123456</option>
              <option value="JN8AZ18W79W123456">JN8AZ18W79W123456</option>
              <option value="1FTRW12W97A123456">1FTRW12W97A123456</option>
            </select>
          </div>
          <div className="flex flex-col col-span-3">
            <label className="text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              className="mt-2 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Car price"
              required
            />
          </div>
          {/* description */}
          <textarea
            name="description"
            placeholder="Write a description"
            className="mt-2 col-span-3 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        {/* pass data in feature section */}
        {/* button */}
        <button
          type="submit"
          className="bg-blue-600 px-8 py-2 rounded-lg font-semibold mt-4 text-white"
        >
          Next Feature
        </button>
      </form>
    </div>
  );
};

export default Details;

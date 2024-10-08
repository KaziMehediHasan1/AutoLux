import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Feature = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const HeatedSeats = form.HeatedSeats.checked;
    const HeatedSteeringWheel = form.HeatedSteeringWheel.checked;
    const NavigationSystem = form.NavigationSystem.checked;
    const TyrePressureMonitoring = form.TyrePressureMonitoring.checked;
    const play = form.play.checked;
    const Bluetooth = form.Bluetooth.checked;
    const HomeLink = form.HomeLink.checked;
    const Driver = form.Driver.checked;
    const Passenger = form.Passenger.checked;
    const BrakinkSystem = form.BrakinkSystem.checked;
    const BackupCamera = form.BackupCamera.checked;
    const Monitor = form.Monitor.checked;
    const CenterConsole = form.CenterConsole.checked;
    const FrontSeats = form.FrontSeats.checked;
    const Moonroof = form.moonroof.checked;
    const Charging = form.Charging.checked;
    const Display = form.Display.checked;

    const checkList = {
      HeatedSeats,
      HeatedSteeringWheel,
      NavigationSystem,
      TyrePressureMonitoring,
      play,
      Bluetooth,
      HomeLink,
      Driver,
      Passenger,
      BrakinkSystem,
      BackupCamera,
      Monitor,
      CenterConsole,
      FrontSeats,
      Moonroof,
      Charging,
      Display,
    };
    // Function to extract true values
    const getTrueValues = (obj) => {
      return Object.entries(obj)
        .filter(([key, value]) => value === true)
        .map(([key]) => key);
    };
    // Get the properties with true values
    const trueProperties = getTrueValues(checkList);
    localStorage.setItem("car-feature", JSON.stringify(trueProperties));
    if (trueProperties) {
      navigate("/dashboard/add-listing/media");
      toast.success("car features successfully field-up");
    }
  };
  return (
    <div className=" mt-6 mx-8 ">
      {/* step 02 */}
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* cols 1 */}
          <div>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="HeatedSeats"
                value="Heated Seats"
                className="accent-gray-900"
              />
              <p>Heated Seats</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="HeatedSteeringWheel"
                value="Heated Steering Wheel"
                className="accent-gray-900"
              />
              <p>Heated Steering Wheel</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="NavigationSystem"
                value="Navigation System"
                className="accent-gray-900"
              />
              <p>Navigation System</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="TyrePressureMonitoring"
                value="Tyre Pressure Monitoring"
                className="accent-gray-900"
              />
              <p>Tyre Pressure Monitoring</p>
            </label>
          </div>
          {/* cols2 */}
          <div>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="play"
                value="Apple CarPlay/Android Auto"
                className="accent-gray-900"
              />
              <p>Apple CarPlay/Android Auto</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Bluetooth"
                value="Bluetooth"
                className="accent-gray-900"
              />
              <p>Bluetooth</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="HomeLink"
                value="HomeLink"
                className="accent-gray-900"
              />
              <p>HomeLink</p>
            </label>
          </div>
          {/* cols3 */}
          <div>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Driver"
                value="Airbag - Driver"
                className="accent-gray-900"
              />
              <p>Airbag - Driver</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Passenger"
                value="Airbag - Passenger"
                className="accent-gray-900"
              />
              <p>Airbag - Passenger</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="BrakinkSystem"
                value="Anti-lock Braking System"
                className="accent-gray-900"
              />
              <p>Anti-lock Braking System</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="BackupCamera"
                value="Backup camera"
                className="accent-gray-900"
              />
              <p>Backup camera</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Monitor"
                value="Blind spot Monitor"
                className="accent-gray-900"
              />
              <p>Blind spot Monitor</p>
            </label>
          </div>
          {/* cols4 */}
          <div>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="CenterConsole"
                value="Center console"
                className="accent-gray-900"
              />
              <p>Center console</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="FrontSeats"
                value="Heated and Ventilated Front seats"
                className="accent-gray-900"
              />
              <p>Heated and Ventilated Front seats</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="moonroof"
                value="Panoramic moonroof"
                className="accent-gray-900"
              />
              <p>Panoramic moonroof</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Charging"
                value="Qi Wireless Charging"
                className="accent-gray-900"
              />
              <p>Qi Wireless Charging</p>
            </label>
            <label className="flex space-x-5">
              <input
                type="checkbox"
                name="Display"
                value="Touchscreen Display"
                className="accent-gray-900"
              />
              <p>Touchscreen Display</p>
            </label>
          </div>
        </div>
        {/* button */}

        <button
          type="submit"
          className="bg-blue-600 md:px-8 px-4 py-2 lg:py-3 text-xs md:text-[16px] mt-2 lg:mt-0 rounded-lg font-semibold text-white"
        >
          Next Media
        </button>
      </form>
    </div>
  );
};

export default Feature;

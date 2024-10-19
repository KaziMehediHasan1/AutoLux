import { useContext, useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
const Contact = () => {
  const axiosSecure = UseAxiosSecure();
  const { loading, currentUser } = useContext(AuthContext);
  const mail = currentUser?.email;
  const [mailLoading, setMailLoading] = useState(false);
  const form = useRef();
  const sendEmail = async (e) => {
    setMailLoading(true);
    e.preventDefault();
    const contact = e.target;
    const body = {
      firstName: contact.firstName.value,
      lastName: contact.lastName.value,
      mail: mail ? mail : contact.mail.value,
      phone: contact.number.value,
      message: contact.message.value,
    };
    try {
      const emailResponse = await emailjs.sendForm(
        "service_0vqj77h",
        "template_cxh0afp",
        form.current,
        {
          publicKey: "6T7-c4q1xHDJapmmT",
        }
      );

      if (emailResponse.status === 200) {
        setMailLoading(true);
        toast.success("Email Sent Successfully");
        const res = await axiosSecure.post("/email", body);
        if (res?.data) {
          setMailLoading(false);
        }
      }
    } catch (error) {
      console.log("email sending failed", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="max-w-screen-xl  mx-auto pt-20">
      {/* google map */}
      <iframe
        className="w-96 md:w-[600px] mx-auto lg:w-full rounded-lg"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.384427983537!2d91.39675127426713!3d23.009653079182858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369e300c7ae27%3A0x69f2da9a4441ca20!2sFeni%20Bangladesh!5e0!3m2!1sen!2sbd!4v1725195953017!5m2!1sen!2sbd"
        width="600"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 mt-8 font-primary">
        {/* form */}
        <div className="px-8 md:px-20 lg:px-0">
          <h1 className="text-3xl font-semibold">Get In Touch</h1>
          <p className="text-sm py-1 text-gray-500">
            "Hi, I have a few questions about your services and would love to
            discuss them further. Please let me know the best way to get in
            touch. Looking forward to hearing from you!"
          </p>
          <form className="mt-4" ref={form} onSubmit={sendEmail}>
            <div className="space-y-4">
              <div className="flex space-x-3 md:space-x-7 lg:space-x-4">
                <input
                  name="firstName"
                  required
                  type="text"
                  placeholder="First Name *"
                  className="w-44 md:w-80 px-5 py-2 rounded-lg border-2"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name "
                  className="w-44 md:w-80 py-2 px-5 rounded-lg border-2"
                />
              </div>
              <div className="flex space-x-3 md:space-x-7 lg:space-x-5">
                <input
                  name="mail"
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-44 md:w-80 px-5 py-2 rounded-lg border-2"
                />
                <input
                  name="number"
                  type="number"
                  required
                  placeholder="Phone*"
                  className="w-44 md:w-80 px-5 py-2 rounded-lg border-2"
                />
              </div>
              <textarea
                name="message"
                required
                placeholder="Message"
                className="border resize-none py-2 px-4 rounded-lg w-full h-64"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn border btn-primary px-5 py-2 my-4 text-white rounded-lg"
            >
              {mailLoading ? <FaSpinner className="animate-spin" /> : "Send Message"}
            </button>
          </form>
        </div>
        {/* contact details */}
        <div className=" md:mt-0 md:space-x-20 space-x-[50px] md:py-4 lg:py-0 md:space-y-[45px] space-y-8">
          <div className="px-10 md:px-20">
            <h1 className="text-3xl font-semibold">Contact details</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in?
            </p>
          </div>
          <div className="flex space-x-2 justify-start  mt-4">
            <CiLocationOn className="text-2xl" />
            <div>
              <h2 className="text-[18px] font-semibold">Address</h2>
              <p className="text-gray-500">
                3900 Feni Bangladesh, Sadar Feni, <br /> Pathan bari road Feni
                bangladesh
              </p>
            </div>
            {/* email */}
          </div>
          <div className="flex space-x-2 justify-start mt-4">
            <MdOutlineEmail></MdOutlineEmail>
            <div>
              <h2 className="text-[18px] font-semibold">Email</h2>
              <p className="text-gray-500">kazimehedihasan243@gmail.com</p>
            </div>
          </div>
          {/* phone */}
          <div className="flex space-x-2 justify-start mt-4">
            <RiPhoneLine className="text-2xl" />
            <div>
              <h2 className="text-[18px] font-semibold">Address</h2>
              <p className="text-gray-500">+00312548754 || 01843300648</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

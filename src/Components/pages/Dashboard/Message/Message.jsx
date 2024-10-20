import { Helmet } from "react-helmet-async";

const Message = () => {
  return (
    <div className="lg:w-[1320px] mx-auto lg:pt-28 pt-16 lg:pb-20 pb-2">
      <Helmet>
        <title>AutoLux | Message</title>
      </Helmet>

      <form className="bg-slate-200 rounded-lg">
        <div className="pt-[535px] h-[600px]">
          <div className="flex items-center px-3 py-3 bg-gray-50">
            <input
              className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg p-2.5"
              placeholder="Your message..."
            />
            <button
              type="submit"
              className="p-2 text-blue-600 rounded-full hover:bg-blue-100"
            >
              <svg
                className="w-5 h-5 rotate-90"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;

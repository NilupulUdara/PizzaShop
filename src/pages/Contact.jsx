import pizzaLeft from "../assets/pizzaLeft.jpg";
import { useTitle } from "../hooks/useTitle";

export const Contact = () => {
  useTitle("Contact Us");

  return (
    <div className="flex h-screen">
      <div className="basis-1/5 flex-1 bg-gray-200 overflow-hidden">
        <img className="h-full w-full object-cover bg-cover" src={pizzaLeft} alt="Pizza" />
      </div>
      <div className="flex-1 bg-white-100 p-4 flex items-center justify-center">
        <div className="w-full h-full max-w-md bg-white overflow-hidden p-6 ">
          <h2 className="text-2xl text-left font-semibold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

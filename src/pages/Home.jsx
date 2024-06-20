import pizza from "/assets/images/pizza.jpeg";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");

  return (
    <section className="relative flex h-screen bg-cover bg-center" style={{ backgroundImage: `url(${pizza})` }}>
      <div className="text my-5 content-evenly px-5">
        <h1 className="text-5xl font-bold">John's Pizza</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">PIZZA TO FIT ANT TASTE.</p>
        <Link to="/menu" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ORDER NOW</Link>
      </div>
    </section>
  )
}

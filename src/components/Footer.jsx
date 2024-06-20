import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Pizza.com</Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">FaceBook</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nilupul-udara-56a885285" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

import { PizzaCard } from "../components/PizzaCard";
import { useTitle } from "../hooks/useTitle";

export const Menu = () => {
  useTitle("Menu");

  const products = [
    { "id": 1, "name": "Pepperoni Pizza", "price": 15.99, "image": "/assets/images/pepperoni.jpg" },
    { "id": 2, "name": "Margherita Pizza", "price": 11.99, "image": "/assets/images/margherita.jpg" },
    { "id": 3, "name": "Pedro Tech Special Pizza", "price": 256.53, "image": "/assets/images/pedrotechspecial.jpg" },
    { "id": 4, "name": "Vegan Pizza", "price": 17.99, "image": "/assets/images/vegan.jpg" },
    { "id": 5, "name": "Pine Apple Pizza", "price": 4.99, "image": "/assets/images/pineapple.jpg" },
    { "id": 6, "name": "Very Expensive Pizza", "price": 1997.99, "image": "/assets/images/expensive.jpg" }
  ];

  return (

    <div>
      <div className="text-2xl text-center font-semibold">OUR MENU</div>
      <section className="max-w-7xl mx-auto py-7 px-9">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {products.map((product) => (
            <PizzaCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

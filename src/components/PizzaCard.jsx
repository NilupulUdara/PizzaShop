export const PizzaCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="max-w-sm mx-2 my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full h-48 overflow-hidden">
        <img className="rounded-t-lg object-cover" src={image} alt={name} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
      </div>
    </div>
  )
}

export default function MenuItem(){
    return (
      <div className=" bg-neutral-200 cursor-pointer p-4 rounded-md text-center hover:shadow-2xl hover:shadow-black/50 hover:bg-gray-100 transition-all">
        <img src="/pizza.png" alt="Pizza"></img>
        <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum, a placeholder text used
          in the printing and typesetting
          industry.
        </p>
        <button className="bg-primary mt-4 text-white rounded-md px-4 py-2">
          Add to cart $11
        </button>
      </div>
    );
}
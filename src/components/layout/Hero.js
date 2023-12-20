import Image from "next/image";
import Right from "../icons/Right";
import Bag from "../icons/Bag";

export default function Hero() {
  return (
    <section className="hero mt-8">
      <div className="py-12">
        <h1 className=" text-6xl font-semibold leading-tight">
          Everthing <br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing piece that make every day complete, a simple yet
          delcious joy in life
        </p>
        <div className="flex gap-4">
          <button className="bg-primary flex gap-1 items-center text-white px-8 py-2 justify-center rounded-md">
            Order now
            <Bag />
          </button>
          <button className="flex gap-1 border-2 items-center justify-center border-gray-700 rounded-md px-8 py-2">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image
          src={"/pizza.png"}
          width={650}
          height={650}
          alt={"Pizza"}
          className="box"
        />
      </div>
    </section>
  );
}

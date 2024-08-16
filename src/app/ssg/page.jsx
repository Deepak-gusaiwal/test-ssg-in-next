import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const page = async () => {
  const response = await fetchProducts();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold capitalize my-2">SSG Page</h1>

      <div className="grid md:grid-cols-10 gap-4">
        {response.map((product) => (
          <div className="card flex flex-col gap-2" key={product.id}>
            <Link href={`/ssg/${product.id}`} className="flex imgBox h-[100px] bg-purple-100 p-2">
              <Image src={product.image} width="400" height="400" className="h-full w-full object-contain" />
            </Link>
            <div className="content">
              <h3>{product.title.substring(0, 15)}...</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

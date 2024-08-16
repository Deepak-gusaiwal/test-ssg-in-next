import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const fetchProduct = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const ProductPage = async ({ params }) => {
  const response = await fetchProduct(params.id);
  console.log("single", response);
  return (
    <div className="p-4 max-w-[800px] my-2 mx-auto bg-slate-100 text-center">
      <div className="imgBox flex mx-auto w-fit max-w-[300px] mb-2">
        <Image
          width={400}
          height={400}
          src={response.image}
          property
          layout="responsive"
        />
      </div>
      <h1 className="text-xl capitalize text-blue-500 font-bold mb-2">
        {response.title}
      </h1>
      <p className="mb-2 text-zinc-600">{response.description}</p>
      <Link
        className="text-red-400 hover:text-red-600 capitalize text-xl"
        href="/ssg"
      >
        Back
      </Link>
    </div>
  );
};

export default ProductPage;

import { promises as fs } from "fs";

import { Product } from "@/types/product-type";

export const readData = async (): Promise<Product[]> => {
  const file = await fs.readFile(process.cwd() + "/lib/data.json", "utf8");
  return JSON.parse(file).products;
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const products = await readData();
  return products
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        cartImage: product.cartImage,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
      };
    })
    .sort((a, b) => Number(b.new) - Number(a.new));
};

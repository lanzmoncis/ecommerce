import { promises as fs } from "fs";
import path from "path";

import { Product } from "@/types/product-type";

export const readData = async (): Promise<Product[]> => {
  // -- Local development readFile --
  // const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  // return JSON.parse(file).products;

  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData).products;
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
        image: product.image,
        cartQuantity: product.cartQuantity,
        features: product.features,
        includedItems: product.includedItems,
        gallery: product.gallery,
        others: product.others,
      };
    })
    .sort((a, b) => Number(b.new) - Number(a.new));
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const products = await readData();
  return products.find((product) => product.slug === slug);
};

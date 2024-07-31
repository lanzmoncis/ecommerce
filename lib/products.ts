import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";

import { Product } from "@/types/product-type";

const { serverRuntimeConfig } = getConfig();

export const readData = async (): Promise<Product[]> => {
  // const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  // const file = await fs.readFile(
  //   path.resolve("/ecommerce/data/data.json"),
  //   "utf-8"
  // );
  // return JSON.parse(file).products;
  const dataPath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "data",
    "data.json"
  );
  const file = await fs.readFile(dataPath, "utf-8");
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

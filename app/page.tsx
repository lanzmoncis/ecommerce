import { Hero } from "@/components/hero";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/app/_data/data.json",
    "utf8"
  );

  const { products } = JSON.parse(file);

  return (
    <>
      <Hero />
    </>
  );
}

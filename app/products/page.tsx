import { Product, ProductType } from "@/components/Product";
import fs from "fs";

export default function ProductsPage() {
  const productsList = JSON.parse(
    fs.readFileSync("./components/productsInfo.json", "utf-8"),
  );
  return (
    <>
      <div>This is for products!</div>
      <ul>
        {productsList.map((prod: ProductType, index: number) => {
          return (
            <li key={index}>
              <Product src={prod.src} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

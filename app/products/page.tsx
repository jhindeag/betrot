import { Product, ProductType } from "@/components/Product";
import NavBar from "@/components/NavBar";
import fs from "fs";

export default function ProductsPage() {
  const productsList = JSON.parse(
    fs.readFileSync("./components/productsInfo.json", "utf-8"),
  );
  return (
    <>
      <NavBar />
      <div className="mx-96">
        <ul className="grid grid-cols-3 gap-20">
          {productsList.map((prod: ProductType, index: number) => {
            return (
              <li key={index}>
                <Product src={prod.src} name={prod.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

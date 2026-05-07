import Image from "next/image";
export interface ProductType {
  name: string;
  src: string;
}

export function Product(props: ProductType) {
  return (
    <article>
      <Image
        src={`/` + props.src}
        width={250}
        height={250}
        alt={"Picture of product"}
      />
      <div>{props.name}</div>
    </article>
  );
}

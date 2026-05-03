export interface ProductType {
  src: string;
}

export function Product(props: ProductType) {
  return (
    <article>
      <img src={props.src} width={"250px"} height={"auto"}></img>
    </article>
  );
}

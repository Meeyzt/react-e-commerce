import { useEffect } from "react";
import { Card, Placeholder, Image } from "semantic-ui-react";
import Model from "../../../Item/Model";

function Product({ data, photo }) {
  const value = {
    title: data.title,
    price: data.price,
    image: photo,
    data: data.date,
  };
  useEffect(() => {}, [data]);
  return (
    <Card
      inverted
      image={
        photo ? (
          <Image src={photo} id="ProductsImage"></Image>
        ) : (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        )
      }
      header={data.title}
      meta={data.date}
      description={data.price + " ₺"}
      extra={<Model data={value} />}
    />
  );
}

export default Product;

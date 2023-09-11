import SingleCatProduct from "./SingleCatProduct";

const ProductCategory = ({ catProducts }) => {
  return catProducts?.map((item, index) => (
    <SingleCatProduct
      key={item.name}
      name={item.name}
      description={item.description}
      slug={item.slug}
      image={item.image}
      isNew={item.new}
      index={index}
    />
  ));
};

export default ProductCategory;

import SingleCat from "./SingleCat";

function UniqueCats({ productData }) {
  let newArrayForCats;

  const uniqueCategories = {};

  productData.forEach((item) => {
    const { category, categoryImage } = item;

    if (!uniqueCategories[category]) {
      uniqueCategories[category] = categoryImage;
    }
  });

  newArrayForCats = Object.keys(uniqueCategories).map((category) => ({
    category,
    categoryImage: uniqueCategories[category],
  }));

  console.log(newArrayForCats);

  return newArrayForCats.map((item) => {
    return (
      <SingleCat
        name={item.category}
        image={item.categoryImage}
        key={item.category}
      />
    );
  });
}

export default UniqueCats;

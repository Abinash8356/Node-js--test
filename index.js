const productsArray = [
  {
    id: 1,
    sku: "abc",
    productName: "name 1",
    category: 1,
  },
  {
    id: 2,
    sku: "def",
    productName: "name 2",
    category: 2,
  },
  {
    id: 3,
    sku: "ghi",
    productName: "name 1",
    category: 2,
  },
  {
    id: 4,
    sku: "klm",
    productName: "name 1",
    category: 3,
  },
  {
    id: 5,
    sku: "xyz",
    productName: "name 1",
    category: 1,
  },
];

const pricingArray = [
  {
    sku: "abc",
    price: 10,
  },
  {
    sku: "def",
    price: 20,
  },
  {
    sku: "ghi",
    price: 30,
  },
  {
    sku: "klm",
    price: 40,
  },
  {
    sku: "xyz",
    price: 50,
  },
];

const categoriesArray = [
  {
    id: 1,
    name: "category1",
  },
  {
    id: 2,
    name: "category2",
  },
  {
    id: 3,
    name: "category3",
  },
  {
    id: 4,
    name: "category4",
  },
  {
    id: 5,
    name: "category5",
  },
];

const resultArray = productsArray.map(product => {
    const { id, sku, productName, category } = product;
    const priceObject = pricingArray.find(item => item.sku === sku);
    const categoryObject = categoriesArray.find(item => item.id === category);
  
    return {
      id,
      sku,
      productName,
      category: categoryObject.id,
      price: priceObject.price
    };
  });
  
  console.log(resultArray);

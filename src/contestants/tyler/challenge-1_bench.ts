/**
 * The Product Catalog Challenge
 * 
 * You have a catalog of products stored in an JSON array at this file:
 * - 'src/assets/challenge-1/challenge-1-product-catalog.json'
 * 
 * Each product has properties like id, name, category, price, tags, etc. See file for more info. 
 * 
 * Write a function that efficiently finds all products that:
 * - Belong to the following category: 'Food & Beverages'
 * - Have the tag: 'organic'
 * - Fall within a price range of: $50 - $150
 */

type ProductDimensions = {
  length: number;
  width: number;
  height: number;
}

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  manufacturer: string;
  sku: string;
  stockQuantity: number;
  dateAdded: string;
  rating: number;
  reviews: number;
  dimensions: ProductDimensions;
  weight: number;
}

type SearchCriteria = {
  category: string;
  tag: string;
  minPrice: number;
  maxPrice: number;
}


/**
 * EXPLAIN YOUR APPROACH AND METHODS HERE
 */
const challenge1ProductCatalogBuffer = await Deno.readTextFile('src/assets/challenge-1/challenge-1-product-catalog.json');
const challenge1ProductCatalog = JSON.parse(challenge1ProductCatalogBuffer);

function challenge1() {
  // your code goes here but feel free to create other functions outside of this if neded (helpers, utils, etc.)
  const filtered = [];
  let totalPrice = 0;

  // Single pass through the data for both filtering and calculating stats
  for (const product of challenge1ProductCatalog) {
    if (
      product.category === 'Food & Beverages' &&
      product.tags.includes('organic') &&
      product.price >= 50 &&
      product.price <= 150
    ) {
      filtered.push(product);
      totalPrice += product.price;
    }
  }

  // Calculate average price with 2 decimal precision
  const averagePrice = filtered.length > 0 ? parseFloat((totalPrice / filtered.length).toFixed(2)) : 0;

  console.log({
    products: filtered,
    count: filtered.length,
    averagePrice: averagePrice
  });
}


/**
 * Test your logic by calling the function.
 */
// await challenge1();
// OR
challenge1();


/**
 * KEEP AT EOF PLEASE 😊
 * 
 * You can run your benchmark using:
 * `deno bench <path_to_file>`
 */
export default Deno.bench({
  group: 'Challenge 1',
  name: 'Tyler',
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

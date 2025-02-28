import products from "../../assets/challenge-1/challenge-1-product-catalog.json" with { type: "json" };
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



/**
 * EXPLAIN YOUR APPROACH AND METHODS HERE
 */
function challenge1() {
  const categoryTarget = 'Food & Beverages';
  const tagTarget = 'organic';
  const minPrice = 50;
  const maxPrice = 150;

  let count = 0;
  const filteredProducts = [];
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.category !== categoryTarget || !product.tags.includes(tagTarget) || product.price < minPrice || product.price > maxPrice) {
      continue;
    }
    filteredProducts.push(product.price);
    count++;
  }

  console.log(`found ${count} matching products.`);
  console.log(`Average price of matches: ${(filteredProducts.reduce((a, b) => a + b, 0) / count).toFixed(2)}`);
}


/**
 * Test your logic by calling the function.
 */
// await challenge1();
// OR
// challenge1();

challenge1();
/**
 * KEEP AT EOF PLEASE 😊
 * 
 * You can run your benchmark using:
 * `deno bench <path_to_file>`
 */
export default Deno.bench({
  group: 'Challenge 1',
  name: 'James',
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

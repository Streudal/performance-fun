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
 * My idea was to keep the function relatively simple by using a simple for loop to check for the required parameters and pushing the results to an array to start.
 * Then I would try to optimize the function by adding or removing things that could be improved.
 * 
 * 1. Import the JSON file the same way you would import a file in another part of the application.
 * 2. Create an empty array to store the resutls in.
 * 3. Loop through the products and find products that have the matching parameters above.
 * 4. Log the total number of results found.
 * 5. Log and calculate the average price using a reduce on the results array to get the sum of all the prices and then divide by the length of the results array. 
 */
function challenge1() {
  // your code goes here but feel free to create other functions outside of this if neded (helpers, utils, etc.)
  const matchingProducts = [];
  for(let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    if(currentProduct.category === 'Food & Beverages' && currentProduct.tags.includes('organic') && (currentProduct.price > 50 && currentProduct.price < 150)) {
      matchingProducts.push(currentProduct);
    }
  }

  const averagePrice = matchingProducts.reduce((sum, product) => sum + product.price, 0) / matchingProducts.length;

  console.log(`found ${matchingProducts.length} matching products.`);
  console.log(`Average price of matches: ${averagePrice.toFixed(2)}`);
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
  name: 'Travis',
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

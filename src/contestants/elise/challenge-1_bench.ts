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
  // your code goes here but feel free to create other functions outside of this if neded (helpers, utils, etc.)
}


/**
 * Test your logic by calling the function.
 */
// await challenge1();
// OR
// challenge1();


/**
 * KEEP AT EOF PLEASE 😊
 * 
 * You can run your benchmark using:
 * `deno bench <path_to_file>`
 */
export default Deno.bench({
  group: 'Challenge 1',
  name: 'Elise',
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

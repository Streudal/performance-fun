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
 function getJson(filePath: string) {
  return Deno.readTextFile(filePath);
}

const TAG_TYPE = "organic";
const CATEGORY_TYPE = "Food & Beverages";
const MIN_PRICE = 50;
const MAX_PRICE = 150;
/**
 * Get raw JSON data then parse
 * Filter to find category type, tags, and price
 * Log out the length of the filtered data
 */
async function challenge1() {
  // your code goes here but feel free to create other functions outside of this if neded (helpers, utils, etc.)
  const file_data = await getJson('src/assets/challenge-1/challenge-1-product-catalog.json');
  const products = await JSON.parse(file_data);
  const filt_products = products.filter(
    item => (item['tags'].includes(TAG_TYPE.toLowerCase()) 
    && item['category'].toLowerCase() == CATEGORY_TYPE.toLowerCase() 
    && item['price'] >= MIN_PRICE && item['price'] <= MAX_PRICE
    ) );

  console.log('There are', filt_products.length, 'products that have in category Food & Beverage, have the tag organic, and are priced between $50-$150.');
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
  name: 'Elise',
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

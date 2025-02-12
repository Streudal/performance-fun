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
 * - Calculate the average price of results (should be $100.33).
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

const findProducts = (
  products: Product[],
  criteria: SearchCriteria
): Product[] => {
  // Using a single filter pass for better performance
  return products.filter(product =>
    // Check category
    product.category === criteria.category &&
    // Check if tags include the search tag
    product.tags.includes(criteria.tag) &&
    // Check price range
    product.price >= criteria.minPrice &&
    product.price <= criteria.maxPrice
  );
}

const searchCriteria: SearchCriteria = {
  category: 'Food & Beverages',
  tag: 'organic',
  minPrice: 50,
  maxPrice: 150
}

/**
 * EXPLAIN YOUR APPROACH AND METHODS HERE
 * 1. Read the product catalog
 * 2. Parse the raw data (stringified data) to JSON array
 * 3. Call `findProducts` to search JSON array for targeted search criteria.
 *    - aasdf
 * 4. Calculate average price of `findProducts` results.
 * 5. Log the total count of `findProducts` results.
 * 6. Log the average price of `findProducts` results.
 */
async function challenge1() {
  try {
    const rawData = await Deno.readTextFile('src/assets/challenge-1/challenge-1-product-catalog.json');
    const products: Product[] = JSON.parse(rawData);
    const results = findProducts(products, searchCriteria);
    const avgPrice = results.reduce((sum, p) => sum + p.price, 0) / results.length;

    console.log(`Found ${results.length} matching products based on search criteria!`);
    console.log(`\nAverage price of matches: $${avgPrice.toFixed(2)}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}


/**
 * Test your logic by calling the function.
 */
await challenge1();


/**
 * KEEP AT EOF PLEASE 😊
 * 
 * You can run your benchmark using:
 * `deno bench <path_to_file>`
 */
Deno.bench({
  group: 'Challenge 1',
  name: 'AI - Claude 3.5 Sonnet',
  baseline: true,
  fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

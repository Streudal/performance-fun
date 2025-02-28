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

// Constants
const DATA_FILE = 'src/assets/challenge-1/challenge-1-product-catalog.json';
const CATEGORY = 'Food & Beverages';
const TAG = 'organic';
const MIN_PRICE = 50;
const MAX_PRICE = 150;
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    tags: string[];
}

/**
 * EXPLAIN YOUR APPROACH AND METHODS HERE
 */
function challenge1() {
    // analyzeProducts();

    getParallelProducts().then((numMatchingProducts) => {
        console.log(`${numMatchingProducts} products match the criteria.`);
    });
}
/**
 * Gets the number of products that match the criteria in parallel
 * @returns The number of products that match the criteria
 */
async function getParallelProducts() {
    const fileBytes = await Deno.readFile(DATA_FILE);
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(fileBytes);

    const products: any[] = JSON.parse(jsonString);
    // Get the number of CPU cores available
    const cpuCount = navigator.hardwareConcurrency || 4;
    const chunkSize = Math.ceil(products.length / cpuCount);
    const chunks = [];

    // Divide products into chunks
    for (let i = 0; i < products.length; i += chunkSize) {
        chunks.push(products.slice(i, i + chunkSize));
    }

    // Process each chunk at the same time
    const countPromises: Promise<number>[] = [];

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        countPromises.push(
            new Promise<number>((resolve) => {
                let numMatches = 0;

                for (const product of chunk) {
                    if (product.price <= MIN_PRICE || product.price >= MAX_PRICE) {
                        continue;
                    }

                    if (product.category !== CATEGORY) {
                        continue;
                    }

                    if (!product.tags.includes(TAG)) {
                        continue;
                    }

                    numMatches++;
                }

                resolve(numMatches);
            })
        );
    }
    // wait for all to finish
    const counts = await Promise.all(countPromises);
    // Combine results from all chunks and return
    return counts.reduce((total, count) => total + count, 0);
}

async function getFilteredProducts() {
    const jsonData = await Deno.readFile(DATA_FILE);
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(jsonData);
    const products: Product[] = JSON.parse(jsonString);
    let numMatchingProducts = 0;
    console.log(products.length);

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price < MIN_PRICE || product.price > MAX_PRICE) {
            continue;
        }
        if (product.category !== CATEGORY) {
            continue;
        }
        if (!product.tags.includes(TAG)) {
            continue;
        }
        numMatchingProducts++;
    }
    return numMatchingProducts;
}

async function analyzeProducts() {
    const jsonData = await Deno.readFile(DATA_FILE);
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(jsonData);
    const products: Product[] = JSON.parse(jsonString);
    let numFB = 0;
    let numOrg = 0;
    let numPrice = 0;

    for (const product of products) {
        if (product.category === CATEGORY) {
            numFB++;
        }
        if (product.tags.includes(TAG)) {
            numOrg++;
        }
        if (product.price >= MIN_PRICE && product.price <= MAX_PRICE) {
            numPrice++;
        }
    }
    console.log(`Number of Food & Beverages products: ${numFB}`);
    console.log(`Number of organic products: ${numOrg}`);
    console.log(`Number of products within price range: ${numPrice}`);
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
    name: 'Noel',
    fn: challenge1, // Your function for the benchmark must return a Promise<void> | void so this doesn't error.
});

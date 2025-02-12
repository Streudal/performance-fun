import { faker } from 'npm:@faker-js/faker';

// Configure here to generate custom number of products for challenge 1.
const NUM_PRODUCTS = 100_000;
const outputFilename = `${import.meta.dirname}/challenge-1-product-catalog.json`;

// Product Categories
const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Books',
  'Sports & Outdoors',
  'Toys & Games',
  'Beauty & Personal Care',
  'Automotive',
  'Health & Wellness',
  'Food & Beverages'
];

// Product Tags
const possibleTags = [
  'new',
  'bestseller',
  'sale',
  'eco-friendly',
  'limited-edition',
  'premium',
  'clearance',
  'organic',
  'handmade',
  'imported',
  'local',
  'vegan',
  'exclusive',
  'trending',
  'seasonal',
  'gift-idea',
  'award-winning',
  'sustainable',
  'vintage',
  'custom'
];

function generateProduct(id: number) {
  // Generate a random number of tags (between 1 and 5)
  const numTags = faker.number.int({ min: 1, max: 5 });
  const tags = faker.helpers.arrayElements(possibleTags, numTags);

  // Generate random price between $1 and $1000 with 2 decimal places
  const price = faker.number.float({ min: 1, max: 1000, fractionDigits: 2 });

  return {
    id: id,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: faker.helpers.arrayElement(categories),
    price: price,
    tags: tags,
    manufacturer: faker.company.name(),
    sku: faker.string.alphanumeric(8).toUpperCase(),
    stockQuantity: faker.number.int({ min: 0, max: 1000 }),
    dateAdded: faker.date.past({ years: 2 }).toISOString(),
    rating: faker.number.float({ min: 1, max: 5, fractionDigits: 2 }),
    reviews: faker.number.int({ min: 0, max: 500 }),
    dimensions: {
      length: faker.number.float({ min: 1, max: 100, fractionDigits: 2 }),
      width: faker.number.float({ min: 1, max: 100, fractionDigits: 2 }),
      height: faker.number.float({ min: 1, max: 100, fractionDigits: 2 })
    },
    weight: faker.number.float({ min: 0.1, max: 50, fractionDigits: 2 })
  };
}

console.log('Starting product generation...');
const products = [];

for (let i = 1; i <= NUM_PRODUCTS; i++) {
  products.push(generateProduct(i));
}

// Write to file
console.log('Writing to file...');
await Deno.writeTextFile(outputFilename, JSON.stringify(products, null, 2));
console.log('Product catalog generated successfully!');

// Generate some sample statistics
const totalProducts = products.length;
const categoryCounts: Record<string, number> = {};
const tagCounts: Record<string, number> = {};
let totalPrice = 0;

products.forEach((product) => {
  // Count categories
  categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;

  // Count tags
  product.tags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  // Sum prices
  totalPrice += product.price;
});

console.log('\nCatalog Statistics:');
console.log(`Total Products: ${totalProducts}`);
console.log(`Average Price: $${(totalPrice / totalProducts).toFixed(2)}`);
console.log('\nCategory Distribution:');
Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => console.log(`${category}: ${count} products (${((count / totalProducts) * 100).toFixed(1)}%)`));
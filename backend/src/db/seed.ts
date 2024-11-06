import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some products
  const product1 = await prisma.product.create({
    data: {
      name: 'Smartphone',
      image: 'smartphone.jpg',
      price: 500,
      originalPrice: 600,
      rating: 4,
      reviews: 120,
      productCards: {
        create: [
          { image: 'smartphone1.jpg', name: 'Smartphone - Black' },
          { image: 'smartphone2.jpg', name: 'Smartphone - Blue' },
        ],
      },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Laptop',
      image: 'laptop.jpg',
      price: 1200,
      originalPrice: 1500,
      rating: 5,
      reviews: 85,
      productCards: {
        create: [
          { image: 'laptop1.jpg', name: 'Laptop - Silver' },
          { image: 'laptop2.jpg', name: 'Laptop - Black' },
        ],
      },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Headphones',
      image: 'headphones.jpg',
      price: 200,
      originalPrice: 250,
      rating: 4,
      reviews: 220,
      productCards: {
        create: [
          { image: 'headphones1.jpg', name: 'Headphones - White' },
          { image: 'headphones2.jpg', name: 'Headphones - Red' },
        ],
      },
    },
  });

  // Populate the Products table with references to each product
  await prisma.products.createMany({
    data: [
      { productId: product1.id },
      { productId: product2.id },
      { productId: product3.id },
    ],
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

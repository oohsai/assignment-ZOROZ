"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create some products
        const product1 = yield prisma.product.create({
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
        const product2 = yield prisma.product.create({
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
        const product3 = yield prisma.product.create({
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
        yield prisma.products.createMany({
            data: [
                { productId: product1.id },
                { productId: product2.id },
                { productId: product3.id },
            ],
        });
        console.log('Seeding completed successfully!');
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));

import { Router, Request, Response } from "express";
import { prismaClient } from "../db";

const router = Router();

//@ts-ignore
router.get('/', async (req,res) => {
    try {
        const products = await prismaClient.product.findMany();
        return res.json({
            products
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//@ts-ignore
router.get('/product/:productId', async (req,res) => {
    try {
        //@ts-ignore
        const productId = parseInt(req.params.productId, 10);

        if (isNaN(productId)) {
            return res.status(400).json({ error: 'Invalid Product ID' });
        }
        const products = await prismaClient.productCard.findMany({
            where: {
                productId: productId,
            },
        });
        return res.json({
            products
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


export const productRouter = router;

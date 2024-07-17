import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductServices {
  async getAllProducts() {
    const allData = await prisma.product.findMany();
    return allData;
  }

  async getProductById(id: string) {
    const allData = await prisma.product.findUnique({
      where: { id },
      include: { description: true },
    });

    return allData;
  }
}

export default ProductServices;

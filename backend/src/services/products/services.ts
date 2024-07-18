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

    if (!allData) {
      return null;
    }

    const { colorsAvailable } = allData;

    for (let i = 0; i < colorsAvailable.length; i += 1) {
      const splitedColor = colorsAvailable[i].split(" ");

      if (splitedColor.length === 2) {
        const findIndexColor = colorsAvailable.findIndex(
          (el) => el === colorsAvailable[i],
        );

        colorsAvailable.splice(findIndexColor, 1);

        colorsAvailable.push(splitedColor.join("-"));
      }
    }

    let { color } = allData;

    const splitedColor = color.split(" ");

    if (splitedColor.length === 2) {
      color = splitedColor.join("-");
    }

    console.log(color);
    console.log(colorsAvailable);
    
    allData.color = color;
    allData.colorsAvailable = colorsAvailable;

    return allData;
  }
}

export default ProductServices;

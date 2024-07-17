type Description = {
  title: string;
  text: string[];
};

export type Product = {
  id: string;
  category: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  image: string;
  images: string[];
  description?: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  year: number;
};

interface CartData {
  productsInCart: Product[];
  quantityOfProducts: number[];
  totalAmount: number;
}

interface UserData {
  favorites: Product[];
  cartData: CartData;
}

interface User {
  userId: string;
  data: UserData;
}

export interface SessionData {
  userId: User;
  data: UserData;
}

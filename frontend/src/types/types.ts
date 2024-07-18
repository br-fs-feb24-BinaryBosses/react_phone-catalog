type Description = {
  title: string;
  text: string[];
};

export type FullProduct = {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description?: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
};

export type Product = {
  priceDiscount: any;
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
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

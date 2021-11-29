import {Reviews} from "./Reviews";

export interface Product {
  id: number;
  title: string;
  price: number;
  desc: string;
  qty: number;
  totalRating: number,
  totalNumberOfRating: number,
  reviews: Reviews[]
}

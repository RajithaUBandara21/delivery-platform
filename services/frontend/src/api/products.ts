import { apiGet } from "./http";
import type { Product } from "../types/Product";

export function getProducts(): Promise<Product[]> {
  return apiGet<Product[]>("/api/products");
}

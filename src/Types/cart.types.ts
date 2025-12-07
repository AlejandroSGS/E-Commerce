import type { Product } from "./product.types";

export interface CartItem {
    id: string;
    product_id: string;
    user_id: string;
    quantity: number;
    product?: Product;
    created_at: string;
}

export interface CartState {
    items: CartItem[];
    loading: boolean;
    error: string | null;
}

export interface CartSummary {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    itemCount: number;
}
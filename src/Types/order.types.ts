import type { Product } from './product.types';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
    id: string;
    user_id: string;
    status: OrderStatus;
    total: number;
    subtotal: number;
    tax: number;
    shipping: number;
    shipping_address: Address;
    created_at: string;
    updated_at: string;
}

export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string;
    quantity: number;
    price: number;
    product?: Product;
}

export interface Address {
    id?: string;
    user_id?: string;
    full_name: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone: string;
}

export interface OrderState {
    orders: Order[];
    currentOrder: Order | null;
    loading: boolean;
    error: string | null;
}
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    user_id: string
                    full_name: string | null
                    avatar_url: string | null
                    phone: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    full_name?: string | null
                    avatar_url?: string | null
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    full_name?: string | null
                    avatar_url?: string | null
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            categories: {
                Row: {
                    id: string
                    name: string
                    description: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    description?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    description?: string | null
                    created_at?: string
                }
            }
            products: {
                Row: {
                    id: string
                    name: string
                    description: string
                    price: number
                    image_url: string
                    category_id: string
                    stock: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    description: string
                    price: number
                    image_url: string
                    category_id: string
                    stock?: number
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    description?: string
                    price?: number
                    image_url?: string
                    category_id?: string
                    stock?: number
                    created_at?: string
                    updated_at?: string
                }
            }
            cart_items: {
                Row: {
                    id: string
                    product_id: string
                    user_id: string
                    quantity: number
                    created_at: string
                }
                Insert: {
                    id?: string
                    product_id: string
                    user_id: string
                    quantity?: number
                    created_at?: string
                }
                Update: {
                    id?: string
                    product_id?: string
                    user_id?: string
                    quantity?: number
                    created_at?: string
                }
            }
            orders: {
                Row: {
                    id: string
                    user_id: string
                    status: string
                    total: number
                    subtotal: number
                    tax: number
                    shipping: number
                    shipping_address: Json
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    status?: string
                    total: number
                    subtotal: number
                    tax: number
                    shipping: number
                    shipping_address: Json
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    status?: string
                    total?: number
                    subtotal?: number
                    tax?: number
                    shipping?: number
                    shipping_address?: Json
                    created_at?: string
                    updated_at?: string
                }
            }
            order_items: {
                Row: {
                    id: string
                    order_id: string
                    product_id: string
                    quantity: number
                    price: number
                }
                Insert: {
                    id?: string
                    order_id: string
                    product_id: string
                    quantity: number
                    price: number
                }
                Update: {
                    id?: string
                    order_id?: string
                    product_id?: string
                    quantity?: number
                    price?: number
                }
            }
            addresses: {
                Row: {
                    id: string
                    user_id: string
                    full_name: string
                    street: string
                    city: string
                    state: string
                    postal_code: string
                    country: string
                    phone: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    full_name: string
                    street: string
                    city: string
                    state: string
                    postal_code: string
                    country: string
                    phone: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    full_name?: string
                    street?: string
                    city?: string
                    state?: string
                    postal_code?: string
                    country?: string
                    phone?: string
                    created_at?: string
                }
            }
        }
    }
}
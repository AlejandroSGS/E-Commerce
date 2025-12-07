export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category_id: string;
    stock: number;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: string;
    name: string;
    description?: string;
    created_at: string;
}

export interface ProductState {
    products: Product[];
    categories: Category[];
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
}

export interface ProductFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
}
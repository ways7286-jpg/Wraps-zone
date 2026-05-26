export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isVeg?: boolean;
  tags?: string[];
  rating?: number;
  prepTime?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedNotes?: string;
}

export interface Review {
  id: string;
  name: string;
  role?: string;
  comment: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wrap' | 'broast' | 'burger' | 'mojito' | 'chinese' | 'ambience';
  image: string;
}

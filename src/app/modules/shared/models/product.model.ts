export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}


export interface Category {
  id: string;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Filter{
  filterName : string;
  filterValue: string;
}


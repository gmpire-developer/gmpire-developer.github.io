export type MattressSize = 'King' | 'Queen' | 'Double';
export type MattressType = 'Memory Foam' | 'Hybrid' | 'Pocket Coil';
export type Firmness = 'Plush' | 'Medium' | 'Firm';

export type Product = {
  id: string;
  name: string;
  type: MattressType;
  price: number;
  sizes: MattressSize[];
  firmness: Firmness[];
  description: string;
  image: string;
  inStockOttawa: boolean;
  visible: boolean;
};

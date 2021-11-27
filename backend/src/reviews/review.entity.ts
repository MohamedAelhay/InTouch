import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @ManyToOne(() => Product, (product: Product) => product.reviews)
  product: Product;
}

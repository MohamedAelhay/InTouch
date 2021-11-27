import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from '../reviews/review.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  desc: string;

  @Column()
  img: string;

  @Column()
  totalRating: number;

  @Column()
  totalNumberOfRating: number;

  @OneToMany(() => Review, (review: Review) => review.product, {
    eager: true,
    cascade: true,
  })
  reviews: Review[];
}

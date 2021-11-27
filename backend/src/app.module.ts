import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { Review } from './reviews/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'in_touch',
      entities: [Product, Review],
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 3,
    }),
    ProductModule,
  ],
})
export class AppModule {}

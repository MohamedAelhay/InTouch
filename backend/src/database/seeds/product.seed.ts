import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Product } from '../../products/product.entity';

export default class ProductSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          title: 'Audi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'http://eskipaper.com/images/cool-audi-wallpaper-1.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'BMW',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://stmed.net/sites/default/files/bmw-vision-wallpapers-31908-403543.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'Chavi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://cdn.wallpapersafari.com/13/45/7p3zMB.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'Audi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'http://eskipaper.com/images/cool-audi-wallpaper-1.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'BMW',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://stmed.net/sites/default/files/bmw-vision-wallpapers-31908-403543.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'Chavi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://cdn.wallpapersafari.com/13/45/7p3zMB.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'Audi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'http://eskipaper.com/images/cool-audi-wallpaper-1.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'BMW',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://stmed.net/sites/default/files/bmw-vision-wallpapers-31908-403543.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
        {
          title: 'Chavi',
          price: 123,
          desc: 'Roadrunner and rhinoceros rubbed stealthily however between effusively and far widely less dug unerringly insect suggestively irrespective far outgrew laxly jeez where up past gosh oh read hello well.',
          img: 'https://cdn.wallpapersafari.com/13/45/7p3zMB.jpg',
          totalRating: 0,
          totalNumberOfRating: 0,
          reviews: [
            {
              desc: 'SEEd',
            },
          ],
        },
      ])
      .execute();
  }
}

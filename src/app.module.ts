import { Module } from '@nestjs/common';
import { CarModelModule } from './modules/car-model/car-model.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarMakerModule } from './modules/car-maker/car-maker.module';

@Module({
  imports: [MongooseModule.forRoot(
     process.env.MONGO_URI || 'mongodb+srv://eagle_dev:zUwXX8zfxw12Bw9t@cluster0.v71kxrc.mongodb.net/CRUDNestAPI'
  ) ,CarModelModule, CarMakerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CarModelModule } from './modules/car-model/car-model.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarMakerModule } from './modules/car-maker/car-maker.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb://localhost:27017/nestJsModules'
  ) ,CarModelModule, CarMakerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModelSchema, CarModule } from './car-module.schema';

@Module({
  providers: [CarModelService],
  controllers: [CarModelController],
  imports: [MongooseModule.forFeature([ { name:CarModule.name, schema: CarModelSchema } ])]
})
export class CarModelModule {}

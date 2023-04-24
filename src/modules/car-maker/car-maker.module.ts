import { Module } from '@nestjs/common';
import { CarMakerService } from './car-maker.service';
import { CarMakerController } from './car-maker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarMaker, CarMakerSchema } from './car-maker.schema';

@Module({
  providers: [CarMakerService],
  controllers: [CarMakerController],
  imports: [MongooseModule.forFeature([ { name:CarMaker.name, schema: CarMakerSchema } ])]
})
export class CarMakerModule {}

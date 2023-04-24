import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

// Schemani typelarini oladi
export type CarModuleDocument = HydratedDocument<CarModule>

@Schema()
export class CarModule {
    @Prop({required: true, type: 'string'})
    en_name:string

    @Prop({required: true, type: 'string'})
    ru_name:string

    @Prop({required: true, type: 'string'})
    kr_name:string
}

export const CarModelSchema = SchemaFactory.createForClass(CarModule)
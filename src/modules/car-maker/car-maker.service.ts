import { Injectable } from '@nestjs/common';
import { CarMakerDTO } from './dto/car-makerDTO';
import { InjectModel } from '@nestjs/mongoose';
import { CarMaker, CarModuleDocument } from './car-maker.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarMakerService {
    carModule: CarMakerDTO[]

    constructor(@InjectModel(CarMaker.name) private carMakerModel: Model<CarModuleDocument>){}

    async getAllCarModule(){ 
        try{
            return this.carMakerModel.find()
        }catch(err){
            return err
        }
    }
    async getOneCarModule(id:string){ 
        try{
            return this.carMakerModel.findById(id)
        }catch(err){
            return err
        }
    }
    async createCarModule(dto: CarMakerDTO){ 
        try{
            return this.carMakerModel.create(dto)
        }catch(err){
            return err
        }
    }
    async deleteCarModule(id:string){ 
        try{
            return this.carMakerModel.findByIdAndDelete(id)
        }catch(err){
            return {error: err, massage: 'Id topilmadi'}
        }
    }
    async updateCarModule(id:string, dto: CarMakerDTO){ 
        try{
            return this.carMakerModel.findByIdAndUpdate(id, dto)  
        }catch(err){
            return {error: err, massage: 'Id topilmadi'}
        }
    }
}

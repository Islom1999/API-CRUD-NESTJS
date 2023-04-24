import { Injectable } from '@nestjs/common';
import { CarModuleDTO } from './dto/car-moduleDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarModule, CarModuleDocument } from './car-module.schema';

@Injectable()
export class CarModelService {
    carModule: CarModuleDTO[]

    constructor(@InjectModel(CarModule.name) private carModuleModel: Model<CarModuleDocument>){}

    async getAllCarModule(){ 
        try{
            return this.carModuleModel.find()
        }catch(err){
            return err
        }
    }
    async getOneCarModule(id:string){ 
        try{
            return this.carModuleModel.findById(id)
        }catch(err){
            return err
        }
    }
    async createCarModule(dto: CarModuleDTO){ 
        try{
            return this.carModuleModel.create(dto)
        }catch(err){
            return err
        }
    }
    async deleteCarModule(id:string){ 
        try{
            return this.carModuleModel.findByIdAndDelete(id)
        }catch(err){
            return {error: err, massage: 'Id topilmadi'}
        }
    }
    async updateCarModule(id:string, dto: CarModuleDTO){ 
        try{
            return this.carModuleModel.findByIdAndUpdate(id, dto)  
        }catch(err){
            return {error: err, massage: 'Id topilmadi'}
        }
    }

}

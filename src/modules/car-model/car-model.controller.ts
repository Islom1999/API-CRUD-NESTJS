
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModuleDTO } from './dto/car-moduleDTO';

@Controller('car-model')
export class CarModelController {
    constructor( private readonly carModuleService: CarModelService){}


    @HttpCode(200)
    @Get()
    async getCarModule(){
        return this.carModuleService.getAllCarModule()
    }

    @HttpCode(200)
    @Get('/:id')
    async getOneCarModule(@Param('id') id:string){
        return this.carModuleService.getOneCarModule(id)
    }

    @HttpCode(200)
    @Post()
    async createCarModule( @Body() dto: CarModuleDTO ){
        return this.carModuleService.createCarModule(dto)
    }

    @HttpCode(200)
    @Delete('/delete/:id')
    async deleteCarModule( @Param('id') id:string ){
        return this.carModuleService.deleteCarModule(id)
    }

    @HttpCode(200)
    @Patch('/update/:id')
    async updateCarModule( @Param('id') id:string, @Body() dto: CarModuleDTO ){
        return this.carModuleService.updateCarModule(id, dto)
    }

}



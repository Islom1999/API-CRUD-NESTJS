import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CarMakerService } from './car-maker.service';
import { CarMakerDTO } from './dto/car-makerDTO';

@Controller('car-maker')
export class CarMakerController {
    constructor( private readonly carMakerService: CarMakerService){}

    @HttpCode(200)
    @Get()
    async getCarModule(){
        return this.carMakerService.getAllCarModule()
    }

    @HttpCode(200)
    @Get('/:id')
    async getOneCarModule(@Param('id') id:string){
        return this.carMakerService.getOneCarModule(id)
    }

    @HttpCode(200)
    @Post()
    async createCarModule( @Body() dto: CarMakerDTO ){
        return this.carMakerService.createCarModule(dto)
    }

    @HttpCode(200)
    @Delete('/delete/:id')
    async deleteCarModule( @Param('id') id:string ){
        return this.carMakerService.deleteCarModule(id)
    }

    @HttpCode(200)
    @Patch('/update/:id')
    async updateCarModule( @Param('id') id:string, @Body() dto: CarMakerDTO ){
        return this.carMakerService.updateCarModule(id, dto)
    }

}

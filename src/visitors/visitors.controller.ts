import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AxiosResponse } from 'axios';
import {Observable, last, lastValueFrom} from 'rxjs';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { HttpService } from '@nestjs/axios';

@Controller({
  version: '1',
  path: 'visitors'
})

export class VisitorsController {
  constructor(
       private readonly http: HttpService,
      private readonly visitorsService: VisitorsService) {}

  //http://localhost:3000/api/v1/visitors
  //method: POST
  //body: { "firstName": "John", "lastName": "Doe", "phone": "1234567890", "idCard": "123 456 789 012   ", "token": "123456", "destFloor": 1 }
  @Post()
  create(@Body() createVisitorDto: CreateVisitorDto) {
    return this.visitorsService.create(createVisitorDto);
  }

  // http://localhost:3000/api/v1/visitors 
  @Get()
  findAll() {
    return this.visitorsService.findAll();
  }

  // http://localhost:3000/api/v1/visitors/count
  @Get('count')
  count(){
    return this.visitorsService.count();
  } 

  // http://localhost:3000/api/v1/visitors/1
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorsService.findOne(+id);
  }

  // http://localhost:3000/api/v1/visitors
  // method: POST
  // body: { "firstName": "John", "lastName": "Doe", "phone": "1234567890", "idCard": "123 456 789  012", "token": "123456", "destFloor": 1 }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
    return this.visitorsService.update(+id, updateVisitorDto);
  }

  // http://localhost:3000/api/v1/visitors/1
  // method: DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitorsService.remove(+id);
  }

}

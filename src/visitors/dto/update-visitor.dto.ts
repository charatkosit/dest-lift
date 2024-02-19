import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitorDto } from './create-visitor.dto';

export class UpdateVisitorDto extends PartialType(CreateVisitorDto) {

    firstName: string;
    lastName: string;
    phone: string;
    callAttribute: string;
    token: string;
    idCard: string;
    destFloor: number;
    checkIn: Date;
    checkOut: Date;
}

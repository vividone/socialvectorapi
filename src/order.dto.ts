import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class OrderDto {
  @IsDateString()
  @IsString()
  order_created: string;

  @IsOptional()
  @IsString()
  transaction_id: string;

  @IsNotEmpty()
  @IsString()
  order_key: string;

  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsNotEmpty()
  @IsObject()
  line_items: object;

  @IsNotEmpty()
  @IsArray()
  meta_data: any;
}

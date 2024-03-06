import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
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
  @IsString()
  product_cat: string;

  @IsNotEmpty()
  @IsNumber()
  sku: number;

  @IsOptional()
  @IsString()
  payment_method: string;

  @IsNotEmpty()
  @IsString()
  service_url: string;
}

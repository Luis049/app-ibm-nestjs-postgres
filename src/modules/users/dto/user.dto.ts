import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumberString,
  IsOptional,
  IsString
} from 'class-validator';

export class UserCreateDto {
  @IsString()
  @ApiProperty({ type: String, description: 'Username' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'user occupation',
    required: false,
  })
  occupation?: string;

  @IsNumberString({ no_symbols: true }, { message: 'Invalid phone number. Should only contain numbers' })
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'User phone number',
    required: false,
  })
  phone?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'user date of birth',
    format: 'date',
    required: false,
  })
  birth_date?: string;

}

export class UserUpdateDto extends PartialType(UserCreateDto) {}

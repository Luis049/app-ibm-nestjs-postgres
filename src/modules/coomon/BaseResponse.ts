import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: Date })
  createdAt?: Date;

  @ApiProperty({ type: Date })
  updatedAt?: Date;
}
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/modules/coomon/BaseResponse';

export class UserResponse extends BaseResponse {

    @ApiProperty({
        description: 'Username',
    })
    name: string;
    @ApiProperty({
        description: 'User occupation',
    })
    occupation: string;
    @ApiProperty({
        description: 'User phone number',
    })
    phone: string;
    @ApiProperty({
        description: 'User date of birth',
    })
    birth_date: string;



}

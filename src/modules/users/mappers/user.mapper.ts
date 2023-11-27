import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserResponse } from '../responses/user.response';
import { UserCreateDto } from '../dto/user.dto';

@Injectable()
export class UserMapper {
  constructor() {}

  mapRead(entity: UserEntity): UserResponse {
    const map: UserResponse = {
      id: entity.id,
      name: entity.name,
      occupation: entity.occupation,
      phone: entity.phone,
      birth_date: entity.birth_date,
    };
    return map;
  }

  async mapCreate(entity: UserCreateDto): Promise<UserEntity> {
    const map: UserEntity = {
      name: entity.name.toUpperCase().trim(),
      occupation: entity.occupation.toUpperCase().trim(),
      phone: entity.phone,
      birth_date: entity.birth_date,
    };
    return map;
  }
}

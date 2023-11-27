import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserQueriesService } from './UserQueries.service';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './mappers/user.mapper';
import { UserResponse } from './responses/user.response';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';

@Injectable()
export class UserCommandsService {
  
  constructor(
    @InjectRepository(UserEntity) 
    private repository: Repository<UserEntity>,
    private readonly _userQuery: UserQueriesService,
    private readonly _map: UserMapper,
  ) {}

  async create(create: UserCreateDto): Promise<UserResponse> {

    const user = await this._map.mapCreate(create);
    const userSaved = await this.repository.save(user);

    return this._map.mapRead(userSaved);
  }

  async update(
    id: string,
    update: UserUpdateDto,
  ): Promise<UserResponse> {
    const user = await this.repository.findOneById(id);
    const uppercaseName = id.toUpperCase().trim()
    const userUpdated = await this.repository.save({
      where: { id: uppercaseName },

      ...user,
      ...update,
    });

    return this._map.mapRead(userUpdated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

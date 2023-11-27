import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './mappers/user.mapper';
import { UserResponse } from './responses/user.response';

@Injectable()
export class UserQueriesService {
    constructor(
        @InjectRepository(UserEntity) private repository: Repository<UserEntity>,
        private readonly _map: UserMapper,
    ) {
    }

    async findAll(): Promise<UserResponse[]> {
        const user = await this.repository.find({
        
        });
        return user.map((user) => this._map.mapRead(user));
    }

    async getOne(id: string): Promise<UserResponse> {
        const user = await this.repository.findOneById(id);
        return this._map.mapRead(user);
    }

    async getOneByName(name: string): Promise<UserEntity> {
        const uppercaseName = name.toUpperCase().trim()
        const user = await this.repository.findOne({
            where: { name: uppercaseName },
        })
        if (!user) {
            return null;
        } else {
            return user;
        }
    }
}

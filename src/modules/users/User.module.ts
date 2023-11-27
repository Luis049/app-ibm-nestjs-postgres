import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity';
import { UserCommandsService } from './UserCommands.service';
import { UserQueriesService } from './UserQueries.service';
import { UserMapper } from './mappers/user.mapper';
import { UserController } from './User.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    providers: [UserCommandsService, UserQueriesService, UserMapper],
    // exports: [UserCommandsService, UserQueriesService, UserMapper],
})
export class UserModule { }

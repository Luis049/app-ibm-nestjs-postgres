import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserCommandsService } from './UserCommands.service';
import { UserQueriesService } from './UserQueries.service';
import { UserMapper } from './mappers/user.mapper';


@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    providers: [UserCommandsService, UserQueriesService, UserMapper],
    // exports: [UserCommandsService, UserQueriesService, UserMapper],
})
export class UserModule { }

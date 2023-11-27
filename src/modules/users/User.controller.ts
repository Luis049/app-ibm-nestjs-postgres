import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCommandsService } from './UserCommands.service';
import { UserQueriesService } from './UserQueries.service';
import { UserResponse } from './responses/user.response';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userCommands: UserCommandsService,
    private readonly userQueries: UserQueriesService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de oraciónes',
    type: UserResponse,
  })
  getAll(): Promise<UserResponse[]> {
    return this.userQueries.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UserResponse,
  })
  getOne(@Param('id') id: string): Promise<UserResponse> {
    return this.userQueries.getOne(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: UserResponse,
  })
  create(@Body() body: UserCreateDto): Promise<UserResponse> {
    return this.userCommands.create(body);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: UserResponse,
  })
  update(
    @Param('id') id: string,
    @Body() body: UserUpdateDto,
  ): Promise<UserResponse> {
    if (body.name) {
      body.name = body.name.toUpperCase().trim();
    }

    if (body.occupation) {
      body.occupation = body.occupation.toUpperCase().trim();
    }
    return this.userCommands.update(id, body);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  delete(@Param('id') id: string): Promise<void> {
    return this.userCommands.delete(id);
  }
}
function trim() {
    throw new Error('Function not implemented.');
}


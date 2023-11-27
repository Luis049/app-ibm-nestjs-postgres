import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_DATABASE } from './confg-database';
import { UserModule } from './modules/users/User.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CONFIG_DATABASE(),
    UserModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

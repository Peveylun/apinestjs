import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import config from './config.json';

@Module({
  imports: [UserModule, MongooseModule.forRoot(config.TOKEN)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

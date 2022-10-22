import { AuthModule } from './Auth/Auth.module';
import { JwtService } from '@nestjs/jwt/dist';
import { UserModule } from './User/User.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import  { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://vova1428:123321@cluster0.qpdgpqx.mongodb.net/?retryWrites=true&w=majority"),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,JwtService]

})
export class AppModule {}

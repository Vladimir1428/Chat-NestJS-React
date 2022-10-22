import { UserSchema } from './Schema/UserSchema';
import { UserService } from './UserService';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: "User",schema: UserSchema}])],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}

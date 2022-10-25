import { AuthGuard } from './Auth.guard';
import { MailModule } from '../Mail/MailModule';
import { UserModule } from './../User/User.module';
import { AuthService } from './Auth.service';
import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret:"SECRET",
            signOptions: {expiresIn: "4d"}
        }),
        MailModule
    ],
    providers: [AuthService,AuthGuard],
    exports: [AuthService]
})
export class AuthModule {

}
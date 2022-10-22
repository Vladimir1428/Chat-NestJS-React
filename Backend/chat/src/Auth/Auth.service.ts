import { MailService } from '../Mail/MailService';
import { UserService } from './../User/UserService';
import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt/dist";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService,
                private readonly mailService: MailService){}
      // singup
      async singUp(userData){
        const user = await this.userService.createUser(userData);
        await this.sendConfirmation(user)
        return user
    }
    async sendConfirmation(user){
       
        const token =  this.generateToken(user)
        this.mailService.sendMail(user.email, token)
    }
    generateToken(payload){
        if(typeof(payload) !== "string")
       return this.jwtService.sign(payload.toJSON())
    }

    async confirm(token){
        try{
            let userData = this.jwtService.decode( Object.keys(token)[0])
            let user = await this.userService.updateUser(userData)
            console.log(`Пользователь ${user}`)
            this.jwtService.verify(Object.keys(token)[0])
            return "<div style='font-size: 64px'>Аккаунт подтвержден</div>"
        }catch(err){
            return "<div style='font-size: 64px'>Время жизни токена истокло</div>"
        } 
    }
}

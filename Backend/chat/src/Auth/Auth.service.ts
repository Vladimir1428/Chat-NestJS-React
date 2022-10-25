import { MailService } from '../Mail/MailService';
import { UserService } from './../User/UserService';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt/dist";

const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService,
                private readonly mailService: MailService){}

    async singUp(userData){
        userData.password =  await bcrypt.hash(userData.password,5)
        const user = await this.userService.createUser(userData);
        await this.sendConfirmation(user)
        return user
    }
    async sendConfirmation(user){
        const token =  this.generateToken(user)
        this.mailService.sendMail(user.email, token)
    }
    async generateToken(payload){
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
    async login(userData) {
       const user = await this.validateUser(userData)

       return this.generateToken(user)
    }
    async validateUser(userData){

        const user =  await this.userService.findUser(userData);

       const passwordEquels = await bcrypt.compare(userData.password,user[0].password)
       if(user && passwordEquels){
        return user[0]
       }else{
        throw new UnauthorizedException({message: "Пользователь не найден"})
       }
    }
}

import { Injectable} from "@nestjs/common";
import {  InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel,
                ){}

    async createUser(userData){
        const user = this.userModel({username: userData.username, password: userData.password, email: userData.email,active: false})
        try{
            return await user.save()
        }catch(err){
            return err.message
        }
    }
    updateUser(userData){
        return this.userModel.findOneAndUpdate({username: userData["username"]},{active: true}).exec()
    }
}
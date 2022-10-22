import { AuthService } from './Auth/Auth.service';
import { UserService } from './User/UserService';
import { Controller, Post, Body, Res, Query, Get} from '@nestjs/common';

@Controller()
export class AppController {

  constructor(private readonly userService: UserService,
              private readonly authService: AuthService
              ) {}

  @Post("/createUser")
   async createUser(@Body() userData, @Res() res ){
    let response = await this.authService.singUp(userData)
    console.log(response)
    res.json(response)
 }
 @Get("/confirm")
  async confirm(@Query() token,@Res() res){
      let response = await this.authService.confirm(token)
      res.send( response)
  }
}
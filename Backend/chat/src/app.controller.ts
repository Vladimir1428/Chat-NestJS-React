import { AuthService } from './Auth/Auth.service';
import { UserService } from './User/UserService';
import { Controller, Post, Body, Res, Query, Get,UseGuards} from '@nestjs/common';
import { AuthGuard } from './Auth/Auth.guard';
@Controller()
export class AppController {

  constructor(private readonly userService: UserService,
              private readonly authService: AuthService
              ) {}

  @Post("/registration")
   async createUser(@Body() userData, @Res() res ){
    let response = await this.authService.singUp(userData)
    res.json(response)
 }

 @Get("/confirm")
  async confirm(@Query() token,@Res() res){
      let response = await this.authService.confirm(token)
      res.send( response)
  }

  @Post("/login")
  async login(@Body() userData, @Res() res){
    const response = await this.authService.login(userData)
    res.json(response)
  }

  @UseGuards(AuthGuard)
  @Get("/")
  HomePage(){
      return "Hello"
  }
}
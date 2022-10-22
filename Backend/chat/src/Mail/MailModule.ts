import { MailService } from './MailService';
import { Module } from "@nestjs/common";

@Module({
    providers: [MailService],
    exports: [MailService]
})

export class MailModule{
    
}
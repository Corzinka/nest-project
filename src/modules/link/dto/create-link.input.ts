import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUrl, IsUUID } from 'class-validator';

@InputType()
export class CreateLinkInput {
    @Field()
    @IsNotEmpty()
    @IsUUID()
    id_profile: string;
    
    @Field()
    @IsNotEmpty()
    name: string;
    
    @Field({ nullable: true })
    @IsOptional()
    description?: string;

    @Field()
    @IsNotEmpty()
    @IsUrl()
    link: string;
}
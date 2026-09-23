import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsNotEmpty()
  first_name: string;

  @Field({ nullable: true })
  @IsOptional()
  patronymic?: string;

  @Field()
  @IsNotEmpty()
  last_name: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;
}

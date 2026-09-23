import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl, IsUUID } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  id_profile: string;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsUrl()
  link: string;
}

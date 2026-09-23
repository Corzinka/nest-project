import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateSkillInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  id_profile: string;

  @Field()
  @IsNotEmpty()
  name: string;
}

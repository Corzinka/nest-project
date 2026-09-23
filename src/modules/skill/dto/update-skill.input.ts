import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateSkillInput } from './create-skill.input.js';

@InputType()
export class UpdateSkillInput extends PartialType( CreateSkillInput ){
  @Field({ nullable: true })
  is_deleted?: boolean;
}

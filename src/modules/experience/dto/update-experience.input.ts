import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateExperienceInput } from './create-experience.input.js';

@InputType()
export class UpdateExperienceInput extends PartialType ( CreateExperienceInput ) {
  @Field({ nullable: true })
  is_deleted?: boolean;
}

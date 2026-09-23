import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateProfileInput } from './create-profile.input.js';

@InputType()
export class UpdateProfileInput extends PartialType( CreateProfileInput ) {
  @Field({ nullable: true })
  is_deleted?: boolean;
}

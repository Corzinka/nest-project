import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateProjectInput } from './create-project.input.js';

@InputType()
export class UpdateProjectInput extends PartialType( CreateProjectInput ) {
  @Field({ nullable: true })
  is_deleted?: boolean;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  @Field()
  id_profile: string;

  @Field()
  name: string;
}

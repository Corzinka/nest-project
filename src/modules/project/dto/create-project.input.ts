import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  id_profile: string;

  @Field()
  name: string;

  @Field()
  link: string;
}

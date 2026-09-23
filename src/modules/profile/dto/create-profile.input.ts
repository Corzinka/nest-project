import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  first_name: string;

  @Field({ nullable: true })
  patronymic?: string;

  @Field()
  last_name: string;

  @Field({ nullable: true })
  description?: string;
}

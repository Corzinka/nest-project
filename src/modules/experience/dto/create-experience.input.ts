import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field()
  id_profile: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  period_start: Date;

  @Field({ nullable: true })
  period_end?: Date;

  @Field({ nullable: true })
  achievements?: string;
}

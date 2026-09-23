import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  time_create: Date;

  @Field({ nullable: true })
  id_user?: string;

  @Field()
  is_deleted: boolean;
}

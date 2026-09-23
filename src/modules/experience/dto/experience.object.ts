import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

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

  @Field()
  time_create: Date;

  @Field({ nullable: true })
  id_user?: string;

  @Field()
  is_deleted: boolean;
}

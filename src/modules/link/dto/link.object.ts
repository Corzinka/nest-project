import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  link: string;

  @Field()
  time_create: Date;

  @Field({ nullable: true })
  id_user?: string;

  @Field()
  is_deleted: boolean;
}
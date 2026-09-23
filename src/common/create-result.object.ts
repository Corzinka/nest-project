import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateResult {
    @Field(() => Int)
    count: number;
}
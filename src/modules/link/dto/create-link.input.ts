import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLinkInput {
    @Field()
    id_profile: string;
    
    @Field()
    name: string;
    
    @Field({ nullable: true })
    description?: string;

    @Field()
    link: string;
}
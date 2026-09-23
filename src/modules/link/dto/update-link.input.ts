import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateLinkInput } from './create-link.input.js';

@InputType()
export class UpdateLinkInput extends PartialType( CreateLinkInput ) {
    @Field({ nullable: true })
    is_deleted?: boolean;
}
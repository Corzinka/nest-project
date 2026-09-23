import { Args, Mutation, ID, Query, Resolver } from '@nestjs/graphql';
import { LinkService } from './link.service.js';
import { Link } from './dto/link.object.js';
import { UpdateLinkInput } from './dto/update-link.input.js';
import { CreateResult } from '../../common/create-result.object.js';
import { CreateLinkInput } from './dto/create-link.input.js';

@Resolver(() => Link)
export class LinkResolver {
    constructor(private readonly linkService: LinkService) {}

    @Query(() => [Link])
    links() {
        return this.linkService.findAll();
    }

    @Query(() => Link, { nullable: true })
    link(
        @Args('id', { type: () => ID }) id: string
    ) {
        return this.linkService.findById(id);
    }

    @Mutation(() => CreateResult)
    createLink(
        @Args('input', { type: () => [CreateLinkInput] }) input: CreateLinkInput[]
    ) {
        return this.linkService.create(input);
    }

    @Mutation(() => Link)
    updateLink(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: UpdateLinkInput,
    ) {
        return this.linkService.update(id, input);
    }
}

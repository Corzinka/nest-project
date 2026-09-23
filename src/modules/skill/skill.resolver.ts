import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service.js';
import { Skill } from './dto/skill.object.js';
import { UpdateSkillInput } from './dto/update-skill.input.js';
import { CreateSkillInput } from './dto/create-skill.input.js';

@Resolver(() => Skill)
export class SkillResolver {
    constructor(private readonly skillService: SkillService) {}

    @Query(() => [Skill])
    skills() {
        return this.skillService.findAll();
    }

    @Query(() => Skill, { nullable: true })
    skill(
        @Args('id', { type: () => ID }) id: string
    ) {
        return this.skillService.findById(id);
    }

    @Mutation(() => [Skill])
    createSkill(
        @Args('input', { type: () => [CreateSkillInput] }) input: CreateSkillInput[]
    ) {
        return this.skillService.create(input);
    }

    @Mutation(() => Skill)
    updateSkill(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: UpdateSkillInput,
    ) {
        return this.skillService.update(id, input);
    }
}

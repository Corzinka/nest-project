import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExperienceService } from './experience.service.js';
import { Experience } from './dto/experience.object.js';
import { UpdateExperienceInput } from './dto/update-experience.input.js';
import { CreateExperienceInput } from './dto/create-experience.input.js';

@Resolver(() => Experience)
export class ExperienceResolver {
    constructor(private readonly experienceService: ExperienceService) {}

    @Query(() => [Experience])
    experiences() {
        return this.experienceService.findAll();
    }

    @Query(() => Experience, { nullable: true })
    experience(
        @Args('id', { type: () => ID }) id: string
    ) {
        return this.experienceService.findById(id);
    }

    @Mutation(() => [Experience])
    createExperiences(
        @Args('input', { type: () => [CreateExperienceInput] }) input: CreateExperienceInput[]
    ) {
        return this.experienceService.create(input);
    }

    @Mutation(() => Experience)
    updateExperience(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: UpdateExperienceInput,
    ) {
        return this.experienceService.update(id, input);
    }
}

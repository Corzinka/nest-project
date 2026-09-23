import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './dto/profile.object.js';
import { Link } from '../link/dto/link.object.js';
import { LinkService } from '../link/link.service.js';
import { SkillService } from '../skill/skill.service.js';
import { Skill } from '../skill/dto/skill.object.js';
import { Experience } from '../experience/dto/experience.object.js';
import { ExperienceService } from '../experience/experience.service.js';
import { Project } from '../project/dto/project.object.js';
import { ProjectService } from '../project/project.service.js';
import { UpdateProfileInput } from './dto/update-profile.input.js';
import { CreateProfileInput } from './dto/create-profile.input.js';

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(
        private readonly profileService: ProfileService, 
        private readonly linkService: LinkService,
        private readonly skillService: SkillService,
        private readonly experinceService: ExperienceService,
        private readonly projectService: ProjectService,
    ) {}

    @Query(() => [Profile])
    profiles() {
        return this.profileService.findAll();
    }

    @Query(() => Profile, { nullable: true })
    profile(
        @Args('id', { type: () => ID }) id: string
    ) {
        return this.profileService.findById(id);
    }

    @Mutation(() => [Profile])
    createProfile(
        @Args('input', { type: () => [CreateProfileInput] }) input: CreateProfileInput[]
    ) {
        return this.profileService.create(input);
    }

    @Mutation(() => Profile)
    updateProfile(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: UpdateProfileInput,
    ) {
        return this.profileService.update(id, input);
    }

    @ResolveField(() => [Link])
    links(@Parent() profile: Profile) {
        return this.linkService.findByIdProfile(profile.id);
    }

    @ResolveField(() => [Skill])
    skills(@Parent() profile: Profile) {
        return this.skillService.findByIdProfile(profile.id);
    }

    @ResolveField(() => [Experience])
    experiences(@Parent() profile: Profile) {
        return this.experinceService.findByIdProfile(profile.id);
    }

    @ResolveField(() => [Project])
    projects(@Parent() profile: Profile) {
        return this.projectService.findByIdProfile(profile.id);
    }
}

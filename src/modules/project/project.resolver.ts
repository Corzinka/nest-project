import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project } from './dto/project.object.js';
import { ProjectService } from './project.service.js';
import { UpdateProjectInput } from './dto/update-project.input.js';
import { CreateResult } from '../../common/create-result.object.js';
import { CreateProjectInput } from './dto/create-project.input.js';

@Resolver(() => Project)
export class ProjectResolver {
    constructor(private readonly projectService: ProjectService) {}

    @Query(() => [Project])
    projects() {
        return this.projectService.findAll();
    }

    @Query(() => Project, { nullable: true })
    project(
        @Args('id', { type: () => ID }) id: string
    ) {
        return this.projectService.findById(id);
    }

    @Mutation(() => CreateResult)
    createProject(
        @Args('input', { type: () => [CreateProjectInput]}) input: CreateProjectInput[]
    ) {
        return this.projectService.create(input);
    }

    @Mutation(() => Project)
    updateProject(
        @Args('id', { type: () => ID }) id:string,
        @Args('input') input: UpdateProjectInput
    ) {
        return this.projectService.update(id, input);
    }
}

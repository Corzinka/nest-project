import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Link } from '../../link/dto/link.object.js';
import { Skill } from '../../skill/dto/skill.object.js';
import { Experience } from '../../experience/dto/experience.object.js';
import { Project } from '../../project/dto/project.object.js';


@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  first_name: string;

  @Field({ nullable: true })
  patronymic?: string;

  @Field()
  last_name: string;

  @Field()
  description: string;

  @Field()
  time_create: Date;

  @Field({ nullable: true })
  id_user?: string;

  @Field()
  is_deleted: boolean;

  @Field(() => [Link])
  links: Link[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}

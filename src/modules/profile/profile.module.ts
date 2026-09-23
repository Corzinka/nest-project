import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { PrismaService } from '../../prisma.service.js';
import { LinkService } from '../link/link.service.js';
import { SkillService } from '../skill/skill.service.js';
import { ExperienceService } from '../experience/experience.service.js';
import { ProjectService } from '../project/project.service.js';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    PrismaService,
    LinkService,
    SkillService,
    ExperienceService,
    ProjectService
  ]
})
export class ProfileModule {}

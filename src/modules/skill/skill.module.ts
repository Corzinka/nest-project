import { Module } from '@nestjs/common';
import { SkillService } from './skill.service.js';
import { SkillResolver } from './skill.resolver.js';
import { PrismaService } from '../../prisma.service.js';

@Module({
  providers: [SkillService, SkillResolver, PrismaService]
})
export class SkillModule {}

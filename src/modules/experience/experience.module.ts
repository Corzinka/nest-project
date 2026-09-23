import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service.js';
import { ExperienceResolver } from './experience.resolver.js';
import { PrismaService } from '../../prisma.service.js';

@Module({
  providers: [ExperienceService, ExperienceResolver, PrismaService]
})
export class ExperienceModule {}

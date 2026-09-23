import { Module } from '@nestjs/common';
import { ProjectService } from './project.service.js';
import { ProjectResolver } from './project.resolver.js';
import { PrismaService } from '../../prisma.service.js';

@Module({
  providers: [ProjectService, ProjectResolver, PrismaService]
})
export class ProjectModule {}

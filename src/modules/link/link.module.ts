import { Module } from '@nestjs/common';
import { LinkService } from './link.service.js';
import { LinkResolver } from './link.resolver.js';
import { PrismaService } from '../../prisma.service.js';

@Module({
  providers: [LinkService, LinkResolver, PrismaService]
})
export class LinkModule {}

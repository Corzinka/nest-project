import { Module } from '@nestjs/common';
import { LinkService } from './link.service.js';
import { LinkResolver } from './link.resolver.js';

@Module({
  providers: [LinkService, LinkResolver]
})
export class LinkModule {}

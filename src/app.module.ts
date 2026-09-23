import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProfileModule } from './modules/profile/profile.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { LinkModule } from './modules/link/link.module.js';
import { SkillModule } from './modules/skill/skill.module.js';
import { ProjectModule } from './modules/project/project.module.js';
import { ExperienceModule } from './modules/experience/experience.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ConfigModule.forRoot(),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'nest-project',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({ 
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    ProfileModule,
    LinkModule,
    SkillModule,
    ProjectModule,
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

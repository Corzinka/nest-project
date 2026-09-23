import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreateExperienceInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  id_profile: string;

  @Field()
  @IsNotEmpty()
  company: string;

  @Field()
  @IsNotEmpty()
  position: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  period_start: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  period_end?: Date;

  @Field({ nullable: true })
  @IsOptional()
  achievements?: string;
}

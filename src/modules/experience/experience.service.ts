import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service.js';
import { UpdateExperienceInput } from './dto/update-experience.input.js';
import { CreateExperienceInput } from './dto/create-experience.input.js';

@Injectable()
export class ExperienceService {
    constructor(private readonly prismService: PrismaService) {}

    findAll() {
        return this.prismService.cls_experience.findMany();
    }

    findById(id: string) {
        this.prismService.cls_experience.findUnique({
            where: { id },
        });
    }

    findByIdProfile(id: string) {
        return this.prismService.cls_experience.findMany({
            where: { id_profile: id }
        })
    }

    create(input: CreateExperienceInput[]) {
        return this.prismService.cls_experience.createManyAndReturn({
            data: input,
        })
    }

    update(id: string, input: UpdateExperienceInput) {
        return this.prismService.cls_experience.update({
            where: { id },
            data: input,
        })
    }
}

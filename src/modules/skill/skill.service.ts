import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service.js';
import { UpdateSkillInput } from './dto/update-skill.input.js';
import { CreateSkillInput } from './dto/create-skill.input.js';

@Injectable()
export class SkillService {
    constructor(private readonly prismService: PrismaService) {}

    findAll() {
        return this.prismService.cls_skill.findMany();
    }

    findById(id: string) {
        return this.prismService.cls_skill.findUnique({
            where: { id },
        })
    }

    findByIdProfile(id: string) {
        return this.prismService.cls_skill.findMany({
            where: { id_profile: id }
        });
    }

    create(input: CreateSkillInput[]) {
        return this.prismService.cls_skill.createManyAndReturn({
            data: input,
        });
    }

    update(id: string, input: UpdateSkillInput) {
        return this.prismService.cls_skill.update({
            where: { id },
            data: input,
        });
    }
}

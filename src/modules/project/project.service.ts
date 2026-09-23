import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service.js';
import { UpdateProjectInput } from './dto/update-project.input.js';
import { CreateProjectInput } from './dto/create-project.input.js';

@Injectable()
export class ProjectService {
    constructor(private readonly prismService: PrismaService) {}

    findAll() {
        return this.prismService.cls_project.findMany();
    }

    findById(id: string) {
        return this.prismService.cls_project.findUnique({
            where: { id },
        });
    }

    findByIdProfile(id: string) {
        return this.prismService.cls_project.findMany({
            where: { id_profile: id }
        });
    }

    create(input: CreateProjectInput[]) {
        return this.prismService.cls_project.createMany({
            data: input,
        });
    }

    update(id: string, input: UpdateProjectInput) {
        return this.prismService.cls_project.update({
            where: { id },
            data: input,
        });
    }
}

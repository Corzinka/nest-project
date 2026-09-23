import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service.js';
import { UpdateLinkInput } from './dto/update-link.input.js';
import { CreateLinkInput } from './dto/create-link.input.js';

@Injectable()
export class LinkService {
    constructor(private readonly prismService: PrismaService) {}

    findAll() {
        return this.prismService.cls_link.findMany();
    }

    findById(id: string) {
        return this.prismService.cls_link.findUnique({
            where: { id },
        })
    }

    findByIdProfile(id: string) {
        return this.prismService.cls_link.findMany({
            where: { id_profile: id }
        });
    }

    create(input: CreateLinkInput[]) {
        return this.prismService.cls_link.createMany({
            data: input,
        })
    }

    update(id: string, input: UpdateLinkInput) {
        return this.prismService.cls_link.update({
            where: { id },
            data: input,
        })
    }
}

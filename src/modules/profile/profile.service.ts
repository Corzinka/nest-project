import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service.js';
import { UpdateProfileInput } from './dto/update-profile.input.js';
import { CreateProfileInput } from './dto/create-profile.input.js';

@Injectable()
export class ProfileService {
    constructor(private readonly prismService: PrismaService) {}

    findAll() {
        return this.prismService.cls_profile.findMany({
            include: {
                cls_link: {
                    where: {
                        is_deleted: false,
                    },
                },
                cls_skill: {
                    where: {
                        is_deleted: false,
                    },
                },
                cls_experience: {
                    where: {
                        is_deleted: false,
                    },
                },
                cls_project: {
                    where: {
                        is_deleted: false,
                    },
                },
            }
        });
    }

    findById(id: string) {
        return this.prismService.cls_profile.findUnique({
            where: { id }
        });
    }

    create(input: CreateProfileInput[]) {
        return this.prismService.cls_profile.createMany({
            data: input,
        })
    }

    update(id: string, input: UpdateProfileInput) {
        return this.prismService.cls_profile.update({
            where: { id },
            data: input,
        })
    }
}

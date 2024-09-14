import { Controller } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Post()
    async create(@Body() dto: Prisma.PostCreateInput) {
        try {
            return await this.postService.create(dto);
        } catch (error) {
            throw new InternalServiceErrorException(error.message);
        }
    }
}

@Patch(':id')
async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.PostUpdateInput,
){
    try {
        return await this.postService.update(id, dto);
    } catch (error) {
        throw new InternalServiceErrorException(error.message);
    }
}
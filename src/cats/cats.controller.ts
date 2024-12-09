import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    
    @Post()
    @Header('Cache-Control', 'no-store')
    create(): string {
        return 'This action adds a new cat';
    }   
    
    @Get()  
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('redirect')
    @Redirect('https://nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }   

    @Get(':id')
    findOne(@Param() params:any): string {
        return `This action returns a #${params.id} cat`;
    }

}

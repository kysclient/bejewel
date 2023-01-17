import {
    Body,
    Controller,
    Delete,
    Get,
    Param, ParseIntPipe,
    Post,
    Put
} from "@nestjs/common";
import {ProductsService} from "./products.service";
import {Product} from "./products.entity";
import {ResultEntity} from "../common/entity/ResultEntity";


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id): Promise<Product> {
        return this.productsService.findOne(id);
    }


    @Post('/enrol')
    create(@Body() product: Product
    ): Promise<ResultEntity> {
        return this.productsService.create(product);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id, @Body() product: Product): Promise<Product> {
        return this.productsService.update(id, product);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id): Promise<boolean> {
        return this.productsService.delete(id);
    }
}
import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./products.entity";
import {ResultEntity} from "../common/entity/ResultEntity";


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        const products = await this.productRepository.find();
        return [...products];
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOne(id);
        return product;
    }

    async create(product: Product): Promise<ResultEntity> {
        const newProduct = this.productRepository.create(product)
        await this.productRepository.save(newProduct);
        return {
            code:'0000',
            message: 'Success',
            data: {
                success: true,
                data: newProduct
            }
        };
    }

    async update(id: number, product: Product): Promise<Product> {
        const updateProduct = await this.findOne(id);
        console.log('findProduct : ', updateProduct)
        if(updateProduct === null) throw new NotFoundException(`Could not find a product with id:${id}`);
        updateProduct.description = product.description;
        updateProduct.images = product.images;
        updateProduct.title = product.title;
        updateProduct.images = product.images;
        await this.productRepository.save(updateProduct);
        console.log('request product : ', product)
        console.log('updateProduct : ', updateProduct)
        return updateProduct;
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.productRepository.delete(id);
        if(result.affected === 0) throw new NotFoundException(`Could not find a product with id:${id}`);
        return true;
    }
}
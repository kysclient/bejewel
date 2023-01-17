import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";
import {ProductsController} from "./products/products.controller";
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    username: "bejewel",
    password: "1234",
    database: "bejewel",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }),
    ProductsModule,
    FileModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}

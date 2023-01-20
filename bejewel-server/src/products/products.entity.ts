import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ""})
    title?: string;

    @Column({default: ""})
    description?: string;

    @Column({default: 0})
    price?: string;

    @Column("text", { array: true , default: []})
    images: string[];
}

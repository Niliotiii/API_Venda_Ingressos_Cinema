import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {IsInt, IsNotEmpty, IsString} from "class-validator";

@Entity('sala')
export class Sala {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsString()
    @Column()
    nome!: string;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsInt()
    @Column()
    capacidade!: string;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsString()
    @Column()
    local_sala!: string;

    
}
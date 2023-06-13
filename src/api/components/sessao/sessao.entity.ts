import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Sala } from '../sala/sala.entity';
import { Filme } from "../filme/filme.entity";
import {IsDateString, IsInt, IsNotEmpty, IsString, IsUUID} from "class-validator";

@Entity('sessao')
export class Sessao {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsDateString()
    @Column()
    data!: Date;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsString()
    @Column()
    horario_inicio!:string;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsString()
    @Column()
    horario_fim!:string;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsInt()
    @ManyToOne( ()=> Sala, (sala)=>sala.id)
    @JoinColumn({name:'sala_id', referencedColumnName:'id'})
    sala_id!: Sala;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsInt()
    @ManyToOne(()=> Filme, (filme)=>filme.id)
    @JoinColumn({name:'filme_id', referencedColumnName:'id'})
    filme_id!: Filme;
}
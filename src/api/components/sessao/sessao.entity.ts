import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sala } from '../sala/sala.entity';
import { Filme } from "../filme/filme.entity";

@Entity('sessao')
export class Sessao {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data!: Date;

    @Column()
    horario_inicio!:string;

    @Column()
    horario_fim!:string;

    @OneToMany(()=> Sala, (Sala)=>Sala.id)
    sala_id!: Sala;

    @OneToMany(()=> Filme, (Filme)=>Filme.id)
    filme_id!: Filme;
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
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

    @ManyToOne( ()=> Sala, (sala)=>sala.id)
    @JoinColumn({name:'sala_id', referencedColumnName:'id'})
    sala_id!: Sala;

    @ManyToOne(()=> Filme, (filme)=>filme.id)
    @JoinColumn({name:'filme_id', referencedColumnName:'id'})
    filme_id!: Filme;
}
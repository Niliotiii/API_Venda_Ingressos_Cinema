import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Poltrona } from '../poltrona/poltrona.entity';

@Entity('sala')
export class Sala {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    capacidade!: string;

    @Column()
    local_sala!: string;

    
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
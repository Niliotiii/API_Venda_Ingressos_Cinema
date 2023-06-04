import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classificacao')
export class Classificao {
@PrimaryGeneratedColumn()
id!: number;

@Column()
nome!: string;

}
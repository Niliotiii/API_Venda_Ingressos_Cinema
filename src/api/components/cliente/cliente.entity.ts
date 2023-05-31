import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cliente')
export class Cliente {
@PrimaryGeneratedColumn()
id!: number;

@Column()
nome!: string;

@Column()
sexo!: string;

@Column()
data_nascimento!: Date;

@Column()
cpf!: string;

@Column()
rg!: string;

@Column()
email!: string;

@Column()
endereco!: string;

@Column()
telefone!: string;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('filme')
export class Filme {
@PrimaryGeneratedColumn()
id!: number;

@Column()
titulo!: string;

@Column()
sinopse!: string;

@Column()
atores!: string;

@Column()
diretor!: string;

@Column()
genero!: string;

@Column()
duracao!: string;

@Column()
classificacao_indicativa!: string;
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sala } from '../sala/sala.entity';

@Entity('poltrona')
export class Poltrona {
@PrimaryGeneratedColumn()
id!: number;

@Column()
numero!: number;

@Column()
fileira!:string;

@Column()
status_poltrona!: boolean;

@OneToMany(()=> Sala, (Sala)=>Sala.id)
sala_id!: Sala;

}
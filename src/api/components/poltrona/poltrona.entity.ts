import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Sala } from '../sala/sala.entity';

@Entity('poltrona')
export class Poltrona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  numero!: number;

  @Column()
  fileira!: string;

  @Column()
  status_poltrona!: boolean;

  @ManyToOne( ()=> Sala, (sala)=>sala.id)
  @JoinColumn({name:'sala_id', referencedColumnName:'id'})
  sala_id!:Sala;
}


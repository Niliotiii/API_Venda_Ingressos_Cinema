import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Sessao } from '../sessao/sessao.entity';
import { Poltrona } from '../poltrona/poltrona.entity';

@Entity('ingresso')
export class Ingresso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valor!: number;

  @Column()
  data_hora!: Date;

  @ManyToOne( ()=> Sessao, (sessao)=>sessao.id)
  @JoinColumn({name:'sessao_id', referencedColumnName:'id'})
  sessao_id!:Sessao;

  @OneToOne( ()=> Poltrona, (poltrona)=>poltrona.id)
  @JoinColumn({name:'poltrona_id', referencedColumnName:'id'})
  poltrona_id!:Poltrona;
}
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Sessao } from '../sessao/sessao.entity';
import { Poltrona } from '../poltrona/poltrona.entity';
import { IsDateString, IsInt, IsNotEmpty, IsNumber} from "class-validator";

@Entity('ingresso')
export class Ingresso {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNumber()
  @Column()
  valor!: number;

  @IsDateString()
  @Column()
  data_hora!: Date;

  @IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
  )
  @IsInt()
  @ManyToOne( ()=> Sessao, (sessao)=>sessao.id)
  @JoinColumn({name:'sessao_id', referencedColumnName:'id'})
  sessao_id!:Sessao;

  @IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
  )
  @IsInt()
  @OneToOne( ()=> Poltrona, (poltrona)=>poltrona.id)
  @JoinColumn({name:'poltrona_id', referencedColumnName:'id'})
  poltrona_id!:Poltrona;
}
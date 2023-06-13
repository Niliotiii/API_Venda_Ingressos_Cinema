import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Sala } from '../sala/sala.entity';
import { IsInt, IsNotEmpty, IsString} from "class-validator";

@Entity('poltrona')
export class Poltrona {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
  )
  @IsInt()
  @Column()
  numero!: number;

  @IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
  )
  @IsString()
  @Column()
  fileira!: string;

  @IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
  )
  @IsString()
  @Column()
  status_poltrona!: boolean;

  @IsNotEmpty({
      message:"propriedade não pode ser vazia"
    }
  )
  @IsInt()
  @ManyToOne( ()=> Sala, (sala)=>sala.id)
  @JoinColumn({name:'sala_id', referencedColumnName:'id'})
  sala_id!:Sala;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

@Entity('filme')
export class Filme {
@PrimaryGeneratedColumn()
id!: number;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
titulo!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
sinopse!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
atores!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
diretor!: string;

@IsOptional()
@IsDateString()
@Column()
tempo!: string;
}
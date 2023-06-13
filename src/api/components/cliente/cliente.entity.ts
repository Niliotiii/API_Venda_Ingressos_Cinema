import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString} from "class-validator";

@Entity('cliente')
export class Cliente {
@PrimaryGeneratedColumn()
id!: number;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
nome!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
cpf!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
rg!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
email!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
endereco!: string;

@IsNotEmpty({
    message:"propriedade não pode ser vazia"
    }
)
@IsString()
@Column()
telefone!: string;
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Cliente} from "../cliente/cliente.entity";
import {Ingresso} from "../ingresso/ingresso.entity";
import {IsDateString, IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";

@Entity('venda')
export class Venda {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsNumber()
    @Column()
    valor!: number;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsDateString()
    @Column()
    data!: Date;

    @IsNotEmpty({
            message:"propriedade não pode ser vazia"
        }
    )
    @IsString()
    @Column()
    forma_pagamento!:string;

    @IsInt()
    @ManyToOne( ()=> Cliente, (cliente)=>cliente.id)
    @JoinColumn({name:'cliente_id', referencedColumnName:'id'})
    cliente_id!: Cliente;

    @IsInt()
    @ManyToOne(()=> Ingresso, (ingresso)=>ingresso.id)
    @JoinColumn({name:'ingresso_id', referencedColumnName:'id'})
    ingresso_id!: Ingresso;
}
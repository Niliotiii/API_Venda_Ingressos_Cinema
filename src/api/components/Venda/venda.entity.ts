import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Cliente} from "../cliente/cliente.entity";
import {Ingresso} from "../ingresso/ingresso.entity";

@Entity('venda')
export class Venda {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    valor!: number;

    @Column()
    data!: Date;

    @Column()
    forma_pagamento!:string;

    @ManyToOne( ()=> Cliente, (cliente)=>cliente.id)
    @JoinColumn({name:'cliente_id', referencedColumnName:'id'})
    cliente_id!: Cliente;

    @ManyToOne(()=> Ingresso, (ingresso)=>ingresso.id)
    @JoinColumn({name:'ingresso_id', referencedColumnName:'id'})
    ingresso_id!: Ingresso;
}
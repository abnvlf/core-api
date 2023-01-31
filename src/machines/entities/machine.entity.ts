import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Machine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    alamat_mesin: string;

    @Column()
    ruangan: string;

    @Column()
    deskripsi_mesin: string;

    // @Column({ default: true })
    // isActive: boolean;
}

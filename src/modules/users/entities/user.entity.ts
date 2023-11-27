import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../coomon/BaseEntity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

    @Column()
    name: string;

    @Column()
    occupation: string;

    @Column()
    phone: string;

    @Column()
    birth_date: string;

    
}


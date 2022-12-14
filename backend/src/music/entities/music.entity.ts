import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('table_music')
export class Music {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  artist: string;
  @Column()
  link: string;

//   @ManyToMany(() => Score, { eager: true })
//   @JoinTable()
//   scores: Score[];




}

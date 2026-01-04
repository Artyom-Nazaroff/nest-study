// import { MovieEntity } from 'src/movie/entities/movie.entity';

// @Entity({ name: 'actors' })
// export class ActorEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ type: 'varchar', length: 64 })
//   name: string;

//   @ManyToMany(() => MovieEntity, (movie) => movie.actors)
//   movies: MovieEntity[];

//   @CreateDateColumn({
//     name: 'created_at',
//   })
//   createdAt: Date;

//   @UpdateDateColumn({
//     name: 'updated_at',
//   })
//   updatedAt: Date;
// }

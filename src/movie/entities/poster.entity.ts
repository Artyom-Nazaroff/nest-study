// import { MovieEntity } from './movie.entity';

// export class MoviePosterEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ type: 'varchar', length: 255 })
//   url: string;

//   @OneToOne(() => MovieEntity, (movie) => movie.poster)
//   movie: MovieEntity;

//   @CreateDateColumn({
//     name: 'created_at',
//   })
//   createdAt: Date;
// }

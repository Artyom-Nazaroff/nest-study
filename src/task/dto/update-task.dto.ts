import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Hey dude it must be a string!' })
  @IsNotEmpty({ message: 'Hey dude it can not be empty yopta!' })
  @Length(2, 40, { message: 'The name must be from 2 till 40 symbols maaaan!' })
  title: string;

  @IsBoolean({ message: 'It must be boolean yooo!' })
  isCompleted: boolean;
}

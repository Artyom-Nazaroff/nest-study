import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';
import { BaseModel } from 'src/common/models/base.model';

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType({
  description: 'Модель пользователя',
})
export class UserModel extends BaseModel implements User {
  @Field(() => String, {
    nullable: true,
    defaultValue: 'Jhon',
    description: "User's name",
  })
  name: string;

  @Field(() => String, {
    nullable: false,
    description: "User's email",
  })
  email: string;

  @Field(() => String, {
    nullable: false,
    description: "User's description",
  })
  password: string;

  @Field(() => UserRole, {
    nullable: false,
    description: "User's roles",
  })
  role: UserRole;
}

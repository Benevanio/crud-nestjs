/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @IsEmail({}, { message: 'O e-mail fornecido é inválido.' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres.' })
  @Matches(/[a-z]/, {
    message: 'A senha deve conter pelo menos uma letra minúscula.',
  })
  @Matches(/[A-Z]/, {
    message: 'A senha deve conter pelo menos uma letra maiúscula.',
  })
  @Matches(/[0-9]/, { message: 'A senha deve conter pelo menos um número.' })
  @Matches(/[\W_]/, {
    message: 'A senha deve conter pelo menos um caractere especial.',
  })
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator/types/decorator/decorators';

export default class MeetingsCreateDTO {
  @ApiProperty({
    description: 'Id do exercício utilizado',
  })
  public exerciseId: number;

  @ApiProperty({
    description: 'Id da sala',
  })
  public roomId: number;

  @ApiProperty({
    description: 'Data e hora que será realizada o encontro',
  })
  public date: string;
}

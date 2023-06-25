import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export default class CreateToolsMeetingDTO {
  @ApiProperty({
    description: 'Id do item a ser usado nas reuniões',
  })
  @IsNumber()
  public toolId: number;

  @ApiProperty({
    description: 'Quantidade deste item',
  })
  @IsNumber()
  public qtd: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNumberString, Min } from 'class-validator';

export default class PaginationDTO {
  @ApiProperty({
    description: 'Quantidade maxima de itens que deve vir na listagem',
    example: 50,
    default: 50,
  })
  @IsNumber()
  @Min(1)
  public max: number;
  @ApiProperty({
    description: 'Respectiva página que deve ser vista',
    example: 1,
    default: 1,
  })
  @IsNumber()
  @Min(1)
  public page: number;
}

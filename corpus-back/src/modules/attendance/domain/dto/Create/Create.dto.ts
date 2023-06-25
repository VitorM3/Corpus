import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import MeetingsCreateDTO from './meetings-create.dto';
import CreateToolsMeetingDTO from './Create-tools-meeting.dto';

export default class CreateAttendanceDto {
  @ApiProperty({
    description: 'Id do paciente',
  })
  @IsNumber()
  public pacientId: number;

  @ApiProperty({
    description: 'Id do médico responsável',
  })
  @IsNumber()
  public doctorId: number;

  @ApiProperty({
    description: 'Quantidade de encontros necessários',
  })
  @IsNumber()
  public qtdMeetings: number;

  @ApiProperty({
    description: 'Descrição breve do motivo da consulta',
  })
  @IsString()
  public description: string;

  @ApiProperty({
    description: 'Descrição breve do motivo da consulta',
    isArray: true,
    type: MeetingsCreateDTO,
  })
  public meetings: MeetingsCreateDTO[];

  @ApiProperty({
    description: 'Descrição breve do motivo da consulta',
    isArray: true,
    type: CreateToolsMeetingDTO,
  })
  public tools: CreateToolsMeetingDTO[];
}

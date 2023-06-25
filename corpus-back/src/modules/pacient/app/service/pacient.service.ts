import { Injectable } from '@nestjs/common';
import PacientRepository from '../repository/pacient.repository';
import FindManyPacientService from './providers/find-many/service';

@Injectable()
export default class PacientService {
  public findMany: FindManyPacientService;

  public constructor(private readonly repository: PacientRepository) {
    this.findMany = new FindManyPacientService(this.repository);
  }
}

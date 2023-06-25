import PacientRepository from '../../../repository/pacient.repository';

export default class FindManyPacientFunctionality {
  public constructor(private readonly repository: PacientRepository) {}

  protected async getPacientOfDatabase(
    name: string,
    max: number,
    page: number,
  ) {
    return await this.repository.views.pacient.many({
      max,
      page,
      where: {
        name,
      },
    });
  }
}

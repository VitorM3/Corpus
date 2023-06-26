import InventoryRepository from '../../../repository/inventory.repository';

export default class FindManyInventoryFunctionality {
  public constructor(
    private readonly inventoryRepository: InventoryRepository,
  ) {}

  protected async getAll(name: string, max: number, page: number) {
    return await this.inventoryRepository.get.many({
      max,
      page,
      where: {
        name,
      },
    });
  }
}

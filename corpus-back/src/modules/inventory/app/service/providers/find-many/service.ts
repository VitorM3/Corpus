import FindManyInventoryDTO from 'src/modules/exercise/domain/dto/find-many.dto';
import InventoryRepository from '../../../repository/inventory.repository';
import FindManyInventoryFunctionality from './functionality';

export default class FindManyInventoryService extends FindManyInventoryFunctionality {
  public constructor(private readonly repository: InventoryRepository) {
    super(repository);
  }
  public async execute(dto: FindManyInventoryDTO) {
    return await this.getAll(dto.name, dto.max, dto.page);
  }
}

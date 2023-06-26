import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface InventoryEntityType {
  id: number;
  name: string;
  quantity: number;
}

export default class InventoryEntity extends BaseEntity<InventoryEntityType> {
  public id: number;
  public name: string;
  public quantity: number;
  public constructor(type: InventoryEntityType) {
    super();
    this.id = type.id;
    this.name = type.name;
    this.quantity = type.quantity;
  }

  public export(): InventoryEntityType {
    return {
      id: this.id,
      name: this.name,
      quantity: this.quantity,
    };
  }
}

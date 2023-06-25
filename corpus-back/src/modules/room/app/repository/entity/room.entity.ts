import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface RoomEntityType {
  id: number;
  name: string;
  occupied: boolean;
}

export default class RoomEntity extends BaseEntity<RoomEntityType> {
  public id: number;
  public name: string;
  public occupied: boolean;
  public constructor(type: RoomEntityType) {
    super();
    this.id = type.id;
    this.name = type.name;
    this.occupied = type.occupied;
  }

  public export(): RoomEntityType {
    return {
      id: this.id,
      name: this.name,
      occupied: this.occupied,
    };
  }
}

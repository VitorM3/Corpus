import FindManyRoomDTO from 'src/modules/room/domain/dto/find-many.dto';
import RoomRepository from '../../../repository/room.repository';

export default class FindManyRoomFunctionality {
  public constructor(private readonly roomRepository: RoomRepository) {}

  protected async getAllRooms({ max, page, name, occupied }: FindManyRoomDTO) {
    return await this.roomRepository.get.many({
      max,
      page,
      where: {
        name: name,
        occupied: occupied,
      },
    });
  }
}

import FindManyRoomDTO from 'src/modules/room/domain/dto/find-many.dto';
import RoomRepository from '../../../repository/room.repository';
import FindManyRoomFunctionality from './functionality';

export default class FindManyRoomService extends FindManyRoomFunctionality {
  public constructor(private readonly repository: RoomRepository) {
    super(repository);
  }

  public async execute(dto: FindManyRoomDTO) {
    return await this.getAllRooms(dto);
  }
}

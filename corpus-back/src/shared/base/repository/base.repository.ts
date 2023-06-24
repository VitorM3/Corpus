import PrismaService from 'src/core/database/app/prisma.service';
import GetManyReturn from '../domain/types/GetManyReturn';
import GetManyTypeParams from '../domain/types/GetManyType';

export default class BaseRepository {
  protected calcTakeAndSkip(max: number, page: number) {
    const skip = max * page - 1;
    return {
      take: max,
      skip,
    };
  }
}

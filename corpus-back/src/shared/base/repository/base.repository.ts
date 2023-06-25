export default class BaseRepository {
  protected calcTakeAndSkip(max: number, page: number) {
    const skip = max * (page - 1);
    return {
      take: max,
      skip,
    };
  }
}

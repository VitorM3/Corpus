export default interface GetManyReturn<T> {
  data: T[];
  pages: number;
  perPage: number;
  total: number;
}

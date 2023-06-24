export default interface IBaseService<T, V> {
  execute: (dto: T) => V;
}

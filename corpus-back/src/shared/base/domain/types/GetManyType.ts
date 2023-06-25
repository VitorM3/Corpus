export default interface GetManyTypeParams<S, W> {
  select?: S;
  where?: W;
  max?: number;
  page?: number;
}

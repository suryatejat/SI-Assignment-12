import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalStorageDataSource} from '../datasources';
import {Movie, MovieRelations} from '../models';

export class MovieRepository extends DefaultCrudRepository<
  Movie,
  typeof Movie.prototype.id,
  MovieRelations
> {
  constructor(
    @inject('datasources.localStorage') dataSource: LocalStorageDataSource,
  ) {
    super(Movie, dataSource);
  }
}

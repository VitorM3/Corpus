import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface ExerciseEntityType {
  id: number;
  name: string;
  description: string;
  knowledge_font: string;
}

export default class ExerciseEntity extends BaseEntity<ExerciseEntityType> {
  public id: number;
  public name: string;
  public description: string;
  public knowledge: string;
  public constructor(type: ExerciseEntityType) {
    super();
    this.id = type.id;
    this.name = type.name;
    this.description = type.description;
    this.knowledge = type.knowledge_font;
  }

  public export(): ExerciseEntityType {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      knowledge_font: this.knowledge,
    };
  }
}

import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface ViewDoctorEntityType {
  id: number;
  name: string;
  email: string;
  cpf: string;
  access_code: string;
}

export default class ViewDoctorEntity extends BaseEntity<ViewDoctorEntityType> {
  public id: number;
  public name: string;
  public email: string;
  public cpf: string;
  public accessCode: string;

  public constructor(type: ViewDoctorEntityType) {
    super();
    this.id = type.id;
    this.name = type.name;
    this.email = type.email;
    this.cpf = type.cpf;
    this.accessCode = type.access_code;
  }

  public export(): ViewDoctorEntityType {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      access_code: this.accessCode,
      cpf: this.cpf,
    };
  }
}

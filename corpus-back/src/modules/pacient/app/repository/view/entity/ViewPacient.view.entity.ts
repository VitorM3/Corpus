import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface ViewPacientEntityType {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  phone_alternative: string;
  sus_code: string;
  unimed_code: string;
  created_at: Date;
}

export default class ViewPacientEntity extends BaseEntity<ViewPacientEntityType> {
  public id: number;
  public name: string;
  public email: string;
  public cpf: string;
  public phone: string;
  public phoneAlternative: string;
  public susCode: string;
  public companyCode: string;
  public createdAt: Date;

  public constructor(type: ViewPacientEntityType) {
    super();
    this.id = type.id;
    this.name = type.name;
    this.email = type.email;
    this.cpf = type.cpf;
    this.phone = type.phone;
    this.phoneAlternative = type.phone_alternative;
    this.susCode = type.sus_code;
    this.companyCode = type.unimed_code;
    this.createdAt = type.created_at;
  }

  public export(): ViewPacientEntityType {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      phone: this.phone,
      phone_alternative: this.phoneAlternative,
      sus_code: this.susCode,
      unimed_code: this.companyCode,
      created_at: this.createdAt,
    };
  }
}

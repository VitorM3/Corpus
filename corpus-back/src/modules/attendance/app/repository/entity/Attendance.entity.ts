import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface AttendancesEntityType {
  id: number;
  pacient_id: number;
  doctor_id: number;
  attendant_id: number;
  meetings_number: number;
  description: string;
  created_at: Date;
  deleted_at?: Date;
}

export default class AttendancesEntity extends BaseEntity<AttendancesEntityType> {
  public id: number;
  public pacientId: number;
  public doctorId: number;
  public attendantId: number;
  public meetingsNumber: number;
  public description: string;
  public createdAt: Date;
  public deletedAt?: Date;

  public constructor(type: AttendancesEntityType) {
    super();
    this.id = type.id;
    this.pacientId = type.pacient_id;
    this.doctorId = type.doctor_id;
    this.attendantId = type.attendant_id;
    this.meetingsNumber = type.meetings_number;
    this.description = type.description;
    this.createdAt = type.created_at;
    this.deletedAt = type.deleted_at;
  }

  public export(): AttendancesEntityType {
    return {
      id: this.id,
      pacient_id: this.pacientId,
      attendant_id: this.attendantId,
      doctor_id: this.doctorId,
      description: this.description,
      meetings_number: this.meetingsNumber,
      created_at: this.createdAt,
      deleted_at: this.deletedAt,
    };
  }
}

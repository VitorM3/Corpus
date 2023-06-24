import BaseEntity from 'src/shared/base/repository/entity/base.entity';

export interface ViewAttendanceFindAllType {
  id: number;
  pacient_name: string;
  doctor_name: string;
  description: string;
  qtd_meetings: number;
  qtd_meetings_without_presence: number;
  qtd_meetings_presence: number;
}

export default class ViewAttendanceFindAllEntity extends BaseEntity<ViewAttendanceFindAllType> {
  public id: number;
  public pacient: string;
  public doctor: string;
  public description: string;
  public meetingsQtd: number;
  public meetingsWithoutPresenceQtd: number;
  public meetingsWithPresence: number;
  public constructor(type: ViewAttendanceFindAllType) {
    super();
    this.id = type.id;
    this.pacient = type.pacient_name;
    this.doctor = type.doctor_name;
    this.description = type.description;
    this.meetingsQtd = type.qtd_meetings;
    this.meetingsWithPresence = type.qtd_meetings_presence;
    this.meetingsWithoutPresenceQtd = type.qtd_meetings_without_presence;
  }

  public export(): ViewAttendanceFindAllType {
    return {
      id: this.id,
      description: this.description,
      doctor_name: this.doctor,
      pacient_name: this.pacient,
      qtd_meetings: this.meetingsQtd,
      qtd_meetings_presence: this.meetingsWithPresence,
      qtd_meetings_without_presence: this.meetingsWithoutPresenceQtd,
    };
  }
}

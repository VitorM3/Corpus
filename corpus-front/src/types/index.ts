export interface Patient {
  id: number;
  name: string;
  cpf: string;
  companyCode: string;
  email: string;
  phone: string;
  phoneAlternative: string;
  susCode: string;
}

export interface Doctor {
  id: number;
  name: string;
  cpf: string;
  email: string;
  accessCode: string;
}

export interface Attendance {
  id: number;
  pacient: string;
  doctor: string;
  description: string;
  meetingsQtd: number;
  meetingsWithPresence: number;
  meetingsWithoutPresenceQtd: number;
}

export interface Option {
  value: string | number;
  label: string;
}

export interface ScheduleFormBody {
  equipment?: string;
  equipmentCount?: number;
  patientId?: number;
  doctorId?: number;
  description?: string;
  qtdMeetings?: number;
  exercice?: string;
  room?: string;
  date?: string;
  hour?: string;
}

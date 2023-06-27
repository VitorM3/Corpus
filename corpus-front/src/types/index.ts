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

export interface Exercise {
  id: number;
  name: string;
  description: string;
  knowledge: string;
}

export interface Room {
  id: number;
  name: string;
  occupied: boolean;
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
  meetings?: {
    exercise?: number;
    room?: number;
    date?: Date;
  }[];
}

export interface Tool {
  id: number;
  name: string;
  quantity: number;
}

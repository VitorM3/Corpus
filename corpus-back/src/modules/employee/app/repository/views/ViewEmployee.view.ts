import PrismaService from 'src/core/database/app/prisma.service';
import DoctorViewRepository from './class/doctor.view';

export default class ViewEmployee {
  public doctor: DoctorViewRepository;

  public constructor(private readonly prismaService: PrismaService) {
    this.doctor = new DoctorViewRepository(
      this.prismaService.vw_doctor,
      this.prismaService,
    );
  }
}

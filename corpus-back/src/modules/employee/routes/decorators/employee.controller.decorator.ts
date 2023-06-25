import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class EmployeeController {
  public static default(suffix?: string) {
    if (suffix) {
      return applyDecorators(
        Controller(`employee/${suffix}`),
        ApiTags('Employee'),
      );
    }
    return applyDecorators(Controller('employee'), ApiTags('Employee'));
  }

  public static doctor() {
    return this.default('doctor');
  }
}

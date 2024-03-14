import { HttpException, InternalServerErrorException } from '@nestjs/common';

export default class BaseController {
  public successfulResponse(data: any, message = 'Success') {
    return {
      data,
      message,
    };
  }

  public errorResponse(error?: Error) {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new InternalServerErrorException('Server error.');
  }
}

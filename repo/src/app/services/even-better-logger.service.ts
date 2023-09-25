import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class EvenBetterLoggerService extends LoggerService {

  constructor() { super(); }

  override log(message: string) {
    const fullNameUserName = 'Juan Godoy';
    super.log(`Message to ${fullNameUserName}: ${message}`);
  }
}


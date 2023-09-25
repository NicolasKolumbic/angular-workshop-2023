import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FileLoggerService implements LoggerService {
  log(message: string): void {
    // Lógica para escribir en un archivo
  }
}

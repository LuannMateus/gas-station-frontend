import { toast } from 'react-toastify';

export class Notify {
  public message: string;

  constructor() {
    this.message = '';
  }

  static error = (message: string) => toast.error(message);

  static success = (message?: string) =>
    toast.success(message || 'Salvo com sucesso!');
}

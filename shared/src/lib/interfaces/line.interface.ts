export interface Waiter {
  id?: string;
  name: string;
  countPersons: string;
}

export interface ResponseWaiter {
  data: Waiter[];
  message: string;
  success: boolean;
}

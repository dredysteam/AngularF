import { Teacher } from './teacher';
export interface Student{
  id: number,
  name: string,
  isHonor: boolean,
  enrollmentDate?: number,
  teachers?: Teacher[];
}
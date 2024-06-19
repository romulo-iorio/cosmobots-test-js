import type { EmployeeProps } from "./Employee";
import { Employee } from "./Employee";

export interface ManagerProps extends EmployeeProps {
  position: string;
  bonus?: number;
}

export class Manager extends Employee {
  private bonus: number;

  public position: string;

  constructor({ position, bonus, ...props }: ManagerProps) {
    super(props);
    this.position = position;
    this.bonus = bonus ?? 0;
  }

  public setBonus(bonus: number) {
    this.bonus = bonus;
  }

  public calculateSalary() {
    const salaryWithoutBonus = super.calculateSalary();
    return salaryWithoutBonus + this.bonus;
  }
}

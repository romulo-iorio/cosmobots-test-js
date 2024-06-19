import type { EmployeeProps } from "./Employee";
import { Employee } from "./Employee";

export interface DeveloperProps extends EmployeeProps {
  completedProjects?: number;
  position: string;
}

export class Developer extends Employee {
  private completedProjects: number;

  public position: string;

  constructor({ position, completedProjects, ...props }: DeveloperProps) {
    super(props);
    this.position = position;
    this.completedProjects = completedProjects ?? 0;
  }

  public addCompletedProject() {
    this.completedProjects += 1;
  }

  public calculateSalary() {
    const salaryWithoutBonus = super.calculateSalary();
    return salaryWithoutBonus * (1 + this.completedProjects * 0.1);
  }
}

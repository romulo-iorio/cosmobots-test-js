export interface EmployeeProps {
  name: string;
  baseSalary: number;
  benefits?: number[];
}

export class Employee {
  private name: string;
  private baseSalary: number;
  private benefits: number[];

  constructor({ name, baseSalary, benefits }: EmployeeProps) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.benefits = benefits ?? [];
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public addBenefit(benefit: number) {
    this.benefits.push(benefit);
  }

  public calculateSalary() {
    const benefitsSum = this.benefits.reduce(
      (acc, benefit) => acc + benefit,
      0
    );
    return this.baseSalary + benefitsSum;
  }
}

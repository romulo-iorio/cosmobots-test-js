- Explique quais conceitos de POO foram usados e onde foram usados;

  Nesse código, foram utilizados os seguintes conceitos básicos de POO: classes, objetos, métodos, atributos, herança e polimorfismo.
  Os conceitos de classes e objetos foram utilizados na criação das próprias classes de "Employee", "Developer" e "Manager" e na criação das instâncias de cada uma dessas classes.
  Os conceitos de métodos e atributos foram utilizados na criação dos métodos (funções) e atributos (características) de cada uma das classes.
  O conceito de herança foi utilizado na criação da classe "Developer" e "Manager", que herdam os atributos e métodos da classe "Employee".
  O conceito de polimorfismo foi utilizado na criação do método "calculateSalary" que é sobrescrito nas classes "Developer" e "Manager".

- Documente e explique o passo a passo do seu raciocínio.

  1. Primeiramente, foi criada a classe "Employee" com os atributos "name", "baseSalary", "benefits" e os método "calculateSalary", "getName", "setName" e "addBenefit".
  2. Em seguida, foi criada a classe "Developer" que herda os atributos e métodos da classe "Employee", adiciona os atributos "completedProjects" e "position", adiciona o método "addCompletedProject", e sobrescreve o método "calculateSalary".
  3. Depois, foi criada a classe "Manager" que herda os atributos e métodos da classe "Employee", adiciona os atributos "bonus" e "position", adiciona o método "setBonus" e sobrescreve o método "calculateSalary".
  4. Por fim, foram criadas as instâncias de cada uma das classes e chamados os métodos "calculateSalary" de cada uma das instâncias, mostrando as diferenças no salário ao adicionar benefícios, bônus e projetos concluídos.

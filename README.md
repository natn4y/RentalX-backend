# Cadastro de carro

**REQUISITOS FUNCIONAIS**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**REGRA DE NEGÓCIO**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
*O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**REQUISITOS FUNCIONAIS**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**REGRA DE NEGÓCIO**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**REQUISITOS FUNCIONAIS**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**REGRA DE NEGÓCIO**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**REQUISITOS FUNCIONAIS**
Deve ser possível cadastrar a imagem do carro.
Dever ser possível listar todos os carros.

**REQUISITOS NÃO FUNCIONAIS**
Utilizar o multer para upload dos arquivos.

**REGRA DE NEGÓCIO**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**REQUISITOS FUNCIONAIS**
Deve ser possível cadastrar um aluguel.

**REGRA DE NEGÓCIO**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O Usuário deve estar logado na aplicação
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.
# Devolução de carro

**REQUISITOS FUNCIONAIS**
Deve ser possível realizar a devolução de um carro

**REGRA DE NEGÓCIO**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
import { fakerPT_BR } from '@faker-js/faker';

export const criarMassaDeTeste = () => {
  return {
    nome: fakerPT_BR.person.firstName(),
    sobrenome: fakerPT_BR.person.lastName(),
    email: fakerPT_BR.internet.email(),
    senha: fakerPT_BR.internet.password(),
    sexo: fakerPT_BR.person.sex(),
    dataNascimento: fakerPT_BR.date.birthdate({ min: 18, max: 65, mode: 'age' }),
    endereco: fakerPT_BR.location.streetAddress(),
    cidade: fakerPT_BR.location.city(),
    estado: fakerPT_BR.location.state(),
    cep: fakerPT_BR.location.zipCode(),
    numeroTelefone: fakerPT_BR.phone.number(),
  };
};

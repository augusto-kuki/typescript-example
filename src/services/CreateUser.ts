interface User {
  name: string;
  email: string;
  senha: string;

  techs: Array<string | Techs>;
}

interface Techs {
  title: string;
  exp: number;
}

export default function createUser({ name, email, senha }: User) {
  const user = { name, email, senha };

  return user;
}

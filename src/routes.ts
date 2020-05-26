import { Response, Request } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'augusto@teste.com',
    name: 'Augusto',
    senha: '123',
    techs: [
      'JavaScript',
      'Typescript',
      {
        title: 'NodeJs',
        exp: 100,
      },
    ],
  });
  return response.json({ user });
}

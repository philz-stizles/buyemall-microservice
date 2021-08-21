import { Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const NotFoundHandler = (
  _request: Request,
  response: Response
): Response<any, Record<string, any>> => {
  const message = 'Resource not found';

  return response.status(404).send(message);
};

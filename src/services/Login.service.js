import api from './http-interceptor';
import { AUTH } from '../contants/endpoints';

export const authenticate = (email, password) => {
  return api.post(AUTH, {
    email,
    password
  });
}

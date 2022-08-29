import { deleteAsync } from 'del';

export const cleanBuild = () => {
  return deleteAsync('public');
}

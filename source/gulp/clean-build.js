import del from 'del';

export const cleanBuild = () => {
  return del('public');
}

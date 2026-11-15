export type CurrentUser = {
  name: string;
  username: string;
};

// Signed-in user shown in the navbar until the auth API is integrated.
export const DEMO_USER: CurrentUser = {
  name: 'Dev Exemplo',
  username: 'dev-exemplo',
};

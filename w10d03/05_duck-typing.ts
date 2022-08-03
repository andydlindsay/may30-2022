interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  return true;
};

const user = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'hello'
};

login(user);

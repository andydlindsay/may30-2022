interface IContainer<T, B> {
  name: string;
  contents: T;
  arr?: B[];
}

const stringContainer: IContainer<string, string> = {
  name: 'string container',
  contents: '42'
};

const booleanContainer: IContainer<boolean, number> = {
  name: 'boolean container',
  contents: true
};

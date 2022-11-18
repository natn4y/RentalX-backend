interface ICreateUserDTO {
  id?: string;
  avatar?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
}

export { ICreateUserDTO };

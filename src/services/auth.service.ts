export class AuthService {
  private username;
  private password;

  constructor() {
    this.username = username;
    this.password = password;
  }

  async login() {
    const credentials = {
      username: this.username,
      password: this.password,
    };
    return credentials;
  }
}

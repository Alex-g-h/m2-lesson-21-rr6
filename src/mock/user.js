class User {
  static IdNumber = 0;

  constructor(name) {
    this.name = name;
    this.id = (User.IdNumber++).toString();
  }
}

export default User;

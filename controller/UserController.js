const User = require("../models/User");

class UserController {
  async createUser(req, res) {
    let { email, password, name } = req.body;

    if (email == undefined) {
      res.status(400);
      res.json({ erro: "o email é invalido!" });
      return;
    }

    let emailExists = await User.findEmail(email);

    if (emailExists) {
      res.status(406);
      res.json({ erro: "O email ja está cadastrado!" });
      return;
    }

    User.newUser(email, password, name);

    res.status(200);
    res.send("usuário criado!");
  }

  async showAll(req, res) {
    let users = await User.findAll();
    res.json(users);
  }
}

module.exports = new UserController();

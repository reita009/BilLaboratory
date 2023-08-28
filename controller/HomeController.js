class HomeController {
  async welcome(req, res) {
    res.send("Seja bem vindo!");
  }
}

module.exports = new HomeController();

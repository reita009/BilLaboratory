const knex = require("../database/connection");
const bcrypt = require("bcrypt");

class User {
  async newUser(email, password, name) {
    try {
      var hash = await bcrypt.hash(password, 10);

      await knex
        .insert({ email, password: hash, name, role: 0 })
        .table("users");
    } catch (erro) {
      console.log(`Opá!...deu algo errado: ${erro}`);
    }
  }

  async findAll() {
    try {
      let result = knex.select(["id", "name", "email", "role"]).table("users");
      return result;
    } catch (erro) {
      console.log(`Opá!...deu algo errado: ${erro}`);
    }
  }

  async findEmail(email) {
    try {
      var result = await knex.select("*").from("users").where({ email: email });
      if (result.length > 0) {
        return true;
      } else {
        return false;
      }

      console.log(result);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //
}

module.exports = new User();

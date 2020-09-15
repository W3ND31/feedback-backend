import { Request, Response } from "express";
import User from "../models/user.model";
import EncryptUtil from "../util/encrypt.util";

class UserController {
  async delete(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para deleção não podem ser nulos",
      });
    }

    const id = request.params.id;

    User.findByIdAndRemove(id).then((data) => {
      if (!data) {
        response.status(404).send({
          message: `Usuário com id ${id} não existe`,
        });
      } else response.status(204).send({ message: "Usuário deletado com sucesso" });
    });
  }

  async update(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para atualização não podem ser nulos",
      });
    }

    const id = request.params.id;

    User.findByIdAndUpdate(id, request.body).then((data) => {
      if (!data) {
        response.status(404).send({
          message: `Usuário com id ${id} não existe`,
        });
      } else response.status(202).send({ message: "Usuário atualizado com sucesso" });
    });
  }

  async show(request: Request, response: Response) {
    const id = request.params.id;

    User.findById(id)
      .then((data) => {
        response.send(data);
      })
      .catch((err) =>
        response.status(500).send({
          message: err.message || "Erro desconhecido ao lista usuário!",
        })
      );
  }

  async index(request: Request, response: Response) {
    User.find()
      .then((data) => {
        response.send(data);
      })
      .catch((err) =>
        response.status(500).send({
          message: err.message || "Erro desconhecido ao listar usuários!",
        })
      );
  }

  async create(request: Request, response: Response) {
    if (!request.body.username) {
      response.status(400).send({ message: "Login não pode ser vazio!" });
      return;
    }

    EncryptUtil.getHash(request.body.password).then((hash) => {
      const user = new User({
        name: request.body.name,
        username: request.body.username,
        hash: hash,
      });

      user
        .save()
        .then((data) => {
          response.send(data);
        })
        .catch((err) => {
          response.status(500).send({
            message: err.message || "Erro desconhecido ao criar usuário",
          });
        });
    });
  }
}

export default UserController;

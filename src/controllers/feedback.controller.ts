import { Request, Response } from "express";
import Feedback from "../models/feedback.model";

class FeedbackController {
  async delete(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para deleção não podem ser nulos",
      });
    }

    const id = request.params.id;

    Feedback.findByIdAndRemove(id).then((data) => {
      if (!data) {
        response.status(404).send({
          message: `Feedback com id ${id} não existe`,
        });
      } else response.status(204).send({ message: "Feedback deletado com sucesso" });
    });
  }

  async update(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para atualização não podem ser nulos",
      });
    }

    const id = request.params.id;

    Feedback.findByIdAndUpdate(id, request.body).then((data) => {
      if (!data) {
        response.status(404).send({
          message: `Feedback com id ${id} não existe`,
        });
      } else response.status(202).send({ message: "Feedback atualizado com sucesso" });
    });
  }

  async show(request: Request, response: Response) {
    const id = request.params.id;

    Feedback.findById(id)
      .then((data) => {
        response.send(data);
      })
      .catch((err) =>
        response.status(500).send({
          message: err.message || "Erro desconhecido ao listar feedback!",
        })
      );
  }

  async index(request: Request, response: Response) {
    Feedback.find()
      .then((data) => {
        response.send(data);
      })
      .catch((err) =>
        response.status(500).send({
          message: err.message || "Erro desconhecido ao listar feedbacks!",
        })
      );
  }

  async create(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para criação não podem ser nulos",
      });
    }

    const feedback = new Feedback({
      creator: request.body.creator,
      subject: request.body.subject,
      feedbackDate: request.body.feedbackDate,
      improvePoints: request.body.improvePoints,
      keepPoints: request.body.keepPoints,
      suggestions: request.body.suggestions,
      finalFeedback: request.body.finalFeedback,
    });

    feedback
      .save()
      .then((data) => response.send({ message: "Feedback criado com sucesso!" }))
      .catch((err) => {
        response.status(500).send({
          message: err.message || "Erro desconhecido ao criar feedback!",
        });
      });
  }

  async listByCreator(request: Request, response: Response) {
    if (!request.body) {
      return response.status(400).send({
        message: "Dados para busca não podem ser nulos",
      });
    }

    Feedback.find({ creator: request.params.idCreator }, (err, data) => {
      if (err) {
        return response.status(500).send({
          message: err.message || "Erro desconhecido ao listar feedbacks!",
        });
      }
      return response.send(data);
    });
  }
}

export default FeedbackController;

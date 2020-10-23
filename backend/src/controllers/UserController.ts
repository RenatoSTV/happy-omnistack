import { Request, Response } from "express";
import { hash } from "bcrypt";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import User from "../models/Users";

export default {
  async create(request: Request, response: Response) {
    const repository = getRepository(User);

    let { email, password } = request.body;

    let data = { email, password };

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return response.sendStatus(409);
    }

    data.password = await hash(password, 8);
    console.log(email, password)

    const user = repository.create(data);

    await repository.save(user);

    return response.status(201).json(user);
  },
};

import { Request, Response } from "express";

import CreateCourseService from './CreateCourseService';

export function createCourse(_: Request, response: Response) {
  const createCourse = new CreateCourseService();

  createCourse.execute({
    name: 'NodeJS',
    educator: 'Dani',
  });

  return response.send();
}

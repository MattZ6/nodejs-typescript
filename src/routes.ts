import { Request, Response } from "express";

import CreateCourseService from './CreateCourseService';

export function createCourse(_: Request, response: Response) {
  const createCourse = new CreateCourseService();

  createCourse.execute({
    name: 'NodeJS',
    duration_in_weeks: 2,
    educator: 'Dani'
  });

  return response.send();
}

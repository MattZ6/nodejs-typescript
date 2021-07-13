type CreateCourseRequest = {
  name: string;
  duration_in_weeks: number;
  educator: string;
}

class CreateCourseService {
  execute(data: CreateCourseRequest) {
    console.log(data);
  }
}

export default CreateCourseService;

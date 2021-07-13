type CreateCourseRequest = {
  name: string;
  duration_in_weeks?: number;
  educator: string;
}

const DEFAULT_COURSE_DURATION_IN_WEEKS = 4;

class CreateCourseService {
  execute({
    name,
    educator,
    duration_in_weeks = DEFAULT_COURSE_DURATION_IN_WEEKS,
  }: CreateCourseRequest) {
    console.log({
      name,
      educator,
      duration_in_weeks,
    });
  }
}

export default CreateCourseService;

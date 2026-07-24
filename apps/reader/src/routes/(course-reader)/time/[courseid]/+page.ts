import { currentCourse } from "@tutors/services/runes";
import { courseService } from "@tutors/services/course";

export const ssr = false;

export const load = async ({ params, fetch }) => {
  const course = await courseService.readCourse(params.courseid, fetch);
  currentCourse.value = course;

  return {
    course,
    lo: course
  };
};

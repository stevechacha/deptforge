import { COURSES } from '../data/curricula'

export const COURSE_INDEX = Object.fromEntries(
  COURSES.map((course) => [course.id, course]),
)

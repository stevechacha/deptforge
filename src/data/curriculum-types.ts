export type CourseLevel = 'Beginner' | 'Intermediate' | 'Expert'

export interface CurriculumTopic {
  title: string
  items: string[]
}

export interface CurriculumSection {
  title: string
  topics: CurriculumTopic[]
}

export interface CourseLevelModule {
  level: CourseLevel
  title: string
  goal: string
  duration: string
  sections: CurriculumSection[]
  projects?: string[]
}

export interface Course {
  id: string
  title: string
  tagline: string
  description: string
  prerequisites: string[]
  tools: string[]
  relatedRoleId?: string
  levels: CourseLevelModule[]
}

export interface LearningModule {
  title: string
  level: string
  dur: string
  topics: string[]
}

export interface Role {
  id: string
  name: string
  tag?: string
  blurb: string
  requirements: string[]
  skills: string[]
  tools: string[]
  outline: LearningModule[]
  connects: string[]
}

export interface Department {
  id: string
  index: string
  icon: string
  name: string
  short: string
  purpose: string
  functions: string[]
  toolsList?: string[]
  color: string
  roles: Role[]
}

export interface IndexedRole extends Role {
  deptId: string
  deptName: string
  deptColor: string
}

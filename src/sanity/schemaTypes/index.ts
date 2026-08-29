import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { profileType } from './profile'
import { educationType } from './education'
import { achievementType } from './achievement'
import { experienceType } from './experience'
import { projectType } from './project'
import { skillType } from './skill'
import { certificateType } from './certificate'
import { toolType } from './tool'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profileType,
    educationType,
    achievementType,
    experienceType,
    projectType,
    skillType,
    certificateType,
    toolType,
  ],
}

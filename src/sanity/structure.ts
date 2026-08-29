import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.documentTypeListItem('profile').title('Profile & About Me'),
      S.documentTypeListItem('education').title('Education'),
      S.documentTypeListItem('achievement').title('Achievements'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('certificate').title('Certificates'),
      S.documentTypeListItem('tool').title('Tools'),
    ])

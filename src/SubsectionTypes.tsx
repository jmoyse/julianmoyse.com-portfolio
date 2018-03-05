enum SubsectionType {
    HEADER = 0,
    ABOUT = 1,
    CONTACT = 2,
    SKILLS = 3,
    PROJECTS = 4,
    EDUCATION = 5,
    SERVER = 6,
    UNKNOWN = -1,
}

function subsectionToDOMName (subsection: SubsectionType) {
    switch (subsection) {
        case (SubsectionType.HEADER):
            return 'headerSection';
        case (SubsectionType.ABOUT):
            return 'aboutSection';
        case (SubsectionType.CONTACT):
            return 'aboutSection';
        case (SubsectionType.SKILLS):
            return 'skillsSection';
        case (SubsectionType.PROJECTS):
            return 'projectsSection';
        case (SubsectionType.EDUCATION):
            return 'educationSection';
        case (SubsectionType.SERVER):
            return 'serverSection';
        default:
            return '';
    }
}

export { SubsectionType, subsectionToDOMName };
# GitHub Resume Page Project Specification

## Project Overview
Build a GitHub resume page using Astro and Fuwari template, with JSON data converted to markdown for static content delivery.

## Project Structure
```
my-resume/
├── markdown/                    # Source JSON and converted markdown files
│   ├── data.json               # Original JSON data
│   ├── new_data.json           # Additional JSON data
│   ├── 01-personal.md          # Personal information and summary
│   ├── 02-contact.md           # Contact information
│   ├── 03-certificates.md      # Education and certificates
│   ├── 04-experience.md        # Work experience (all jobs sequentially)
│   └── 05-skills.md            # Technical skills with years of experience
├── astro-cv/                   # Astro project with Fuwari template
└── requirements/               # Project documentation
    └── project-specification.md # This file
```

## Technical Requirements

### 1. Data Conversion
- **Source**: JSON files in `markdown/` folder
- **Output**: Multiple markdown files with frontmatter metadata
- **Format**: Each markdown file includes YAML frontmatter with title and lastUpdated
- **Structure**: 
  - `01-personal.md` - Name, title, summary
  - `02-contact.md` - All contact information with clickable links
  - `03-certificates.md` - Education and certificates
  - `04-experience.md` - All work experience listed sequentially
  - `05-skills.md` - Skills with years of experience

### 2. Astro Project Setup
- **Template**: Fuwari (default configuration, no customizations)
- **Location**: `astro-cv/` folder
- **Styling**: Default Fuwari styling (no custom CSS)
- **Content**: Markdown files from `markdown/` folder

### 3. Content Organization
- **Contact Information**: Displayed in both header and dedicated contact section
- **Skills Display**: Simple list format with years of experience
- **Experience**: All jobs listed sequentially in one section
- **Manual Control**: Custom display order for each markdown section

### 4. Deployment
- **Platform**: GitHub Pages
- **Build**: Static site generation
- **Performance**: Optimized for fast loading with static markdown content

## File Specifications

### Markdown File Format
Each markdown file follows this structure:
```markdown
---
title: "Section Title"
lastUpdated: "2024-01-15"
---

# Section Heading

Content formatted appropriately for the section type...
```

### Content Sections

#### Personal Information (01-personal.md)
- Name and title
- Professional summary
- Clean, professional formatting

#### Contact Information (02-contact.md)
- Phone, email, social media links
- Clickable email and URL links
- Formatted for both header and dedicated section display

#### Certificates & Education (03-certificates.md)
- Educational background
- Professional certificates
- Years and institutions clearly marked

#### Work Experience (04-experience.md)
- All jobs listed sequentially
- Company, position, location, period
- Project descriptions, responsibilities, achievements
- Technologies used for each role

#### Technical Skills (05-skills.md)
- All skills listed with years of experience
- Simple list format
- No categorization required

## Implementation Notes

### Data Source
- Primary source: `markdown/data.json`
- Secondary source: `markdown/new_data.json` (if needed)
- Manual conversion process (no automated script required)

### Astro Configuration
- Use Fuwari template as-is
- Configure for GitHub Pages deployment
- Set up markdown content integration
- Ensure responsive design

### Performance Requirements
- Fast loading times
- Static content delivery
- SEO optimized
- Mobile-friendly

## Success Criteria
1. ✅ JSON data successfully converted to 5 markdown files
2. ✅ Astro project created with Fuwari template
3. ✅ Markdown content properly integrated
4. ✅ Contact information displayed in header and dedicated section
5. ✅ Skills displayed as simple list with experience years
6. ✅ Experience section shows all jobs sequentially
7. ✅ Manual control over section display order
8. ✅ Ready for GitHub Pages deployment
9. ✅ Fast loading with static content

## Next Steps
1. Create Astro project in `astro-cv/` folder
2. Configure Fuwari template
3. Integrate markdown content
4. Set up GitHub Pages deployment
5. Test and optimize performance 
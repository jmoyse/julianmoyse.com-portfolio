![Screenshot](https://raw.githubusercontent.com/jmoyse/julianmoyse.com-portfolio/master/src/screenshots/portfolio.png)

# Portfolio

## About
This is the source of my personal portfolio. You can see the website in action at [(https://www.julianmoyse.com)]https://www.julianmoyse.com. The website is designed to a personal showcase of the some applications that I have created over the years. The individual components of the website are modular and designed to be reusable for this and other projects in the future.

Uses the following technologies:
* React
* React-Native
* Material-UI
* Typescript
* Redux
* React-Redux
* Font-Awesome
## Editing
The majority of the site can be changed by editing the data.xml file and running it through an [XML to JSON](https://codebeautify.org/xmltojsonXML) converter. The resulting file should be named data.json and put in the base of the src folder. At some point in the future I'll read directly from the XML. Below are some XML blocks explaining how to edit the various sections.

  ### Intro 
  ```xml
  <intro avatar="path/to/avatar.jpg" heading="First Name Last Name"  subheading="Some Job Title" />
  ```
  ### Contacts
  ```xml
  <contacts>
        <contact name="contact type" link="url.of.contact" icon="icon-filename-in-icons-folder.png" />
  </contacts>
  ```

  ### Projects
  ```xml
  <projects>
        <project name="project name" url="optional-url.of.project" screenshot="filename-in-screenshotsfolder.jpg"  github="optional-github-url">
            <description>description of the project </description>
        <techs>
            <tech name="name of technology used" icon="optional icon" />
        </techs>
  </project>
  ```

  ### Education
  ```xml
  <education>
        <school name="Name of School" degree="Name of Degree" location="Location" />
  </education>
  ```

  ### Skills
  ```xml
  <skills>
    <skill name="Skill Name" icon="icon-name-in-iconsfolder.png" score="score from 0 to 100" />
  </skills>
  ```


## Installation
1. Run `npm install`
2. Run `npm start`
3. Run `npm run android`
4. Point your web browser to http://localhost:3000 

## Deploying
1. Edit deploy path in package.json
2. Run `npm run build`
3. Built website can be found in ./build/
4. Run `npm run deploy` to deploy to path
5. Will deploy to path listed in `copy` script


If you have questions feel free to send me a message.
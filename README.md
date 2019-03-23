![Portfolio March 2019](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/0_header.png)

PORTFOLIO LINK: https://alxdwa.github.io

REPO LINK: https://github.com/alxdwa/alxdwa.github.io

## Description ##

This README documents the development of my first personal and professional portfolio (as of March 2019), including details on its design, planning and execution.

### Purpose & Target Audience ### 

Through this portfolio, I want to showcase my skills, attributes and personality in an effective, compelling and genuine way. This portfolio should and will be an important tool in networking, developing my personal brand and increasing my online presence. Its purpose is also to attract prospective internship providers, employers and collaborators. As such, it should be targeted to a wide audience spanning all demographics, and appeal to (and be accessible by) anyone irrespective of age, gender, ability, sexual orientation, race or religion. 

### Functionality & Sitemap ### 

This portfolio is structured as a single-page website with 4 sections:

* a landing page
* a section showcasing my work ('Work'/'Portfolio')
* a section with details about myself ('About'/'Alex Diwa'), and
* a section with information for people to get in touch with me ('Contact')

A navigation bar (pop-up for mobile devices) allows the user to move between sections on the website, but the user can also scroll between sections if preferred.

### Screenshots ### 

Below are screenshots of the portfolio as of Saturday March 23, 2019. Although this will be submitted for assessment on March 24, 2019, development and update of this site will be ongoing and this by no means represents the final product. 

![screenshots for desktop](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/14_screenshots_desktop.png)

![screenshots for handheld devices](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/13_screenshots_handheld.png)

### Tech Stack ### 

This portfolio was built using HTML5, CSS3 and JavaScript. The site was deployed using [GitHub Pages](https://pages.github.com).

## Design & Planning ##

### Project Plan & Timeline ### 

The portfolio needs to be deployed within the timeframe of one week, so careful time management was required. This was a rough timeline anf plan that I drafted at the beginning of the week:

Mon 18th:
* Brainstorming
* Wireframe mockup

Tues 19th:
* Finalise mockup and page layout for mobile and desktop
* Draft sketches of design elements
* Begin writing HTML backbone for mobile website
* Code the navigation (JS)

Weds 20th:
* Write CSS for mobile site
* Implement and position design elements
* Begin adding media queries for desktop site

Thurs 21st:
* Finalise desktop site
* Code portfolio/work navigation
* Begin writing content

Fri 22nd:  
* Add content and screenshots/images of works
* Implement accessibility measures
* Optimise for tablet

Sat 23rd:
* Test site on as many browsers and screen sizes as possible
* Research and answer diploma questions

Sun 24th:
* Finalise layout, add sprinkles
* Tidy up code if need be
* Submit

Despite following the plan initially, I ended up reworking the site on the Thursday prior to commencing writing content, and in practice XXXXXXXXXXXXXXXXXXX More detailed to-do points can be seen in the trello screenshots provided here.


### Trello: Brainstorming & Agile Workflow ###

Trello board for brainstorming prior to beginning the project:

![trello_1_brainstorm](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/1_trello_brainstorm.png)

I also used Trello to plan my sprints, using a method I have found useful before (3 columns: To Do, Doing and Done). This allows me to keep track of my goals and what needs to be done. I found it helpful to have an extra column that had my 'sprinkles' -- additional features that weren't necessary for the MVP but that I eventually wanted to implement, perhaps not within the timeframe of the week in which this portfolio needed to be completed. 

First agile sprint:

![trello 2_workflow sprint 1](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/5_trello_workflow.png)

### Moodboard ###

First moodboard for initial design, compiled based on brainstorming descriptive words (see trello board above). 

![moodboard](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/2_pinterest_moodboard.png)

### Wireframes ### 

#### Mobile #### 

Wireframe for mobile devices, generated using Balsamiq Mockups 3. Device size of 320 x 568 taken as minimum, and will be used as the starting point for responsive design.

![mobile_wireframe](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/6_wireframe_mobile.png)

#### Desktop ####

Wireframe for desktop. Dimensions of 1024 x 768 used as a guide.

![desktop_wireframe](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/7_wireframe_desktop.png)

### Design Process ### 

#### Code Structure ####

I wanted to create a simple page that was easy and intuitive to navigate. As such, I decided on a single page with divs that delinated each of the 4 sections. I later ended up placing these divs in larger container divs to add whitespace and backgrounds above and/or below each of the sections. 

Beginning the coding process, I adopted a mobile-first approach which made for a relatively straightforward transition to design for desktop. A common motif was the use of CSS flexbox and using media queries to change between flex-direction: column to row. With flexbox, I had a great degree of control over the overall structure of each section. Only after formatting the pages for mobile and for desktop did I begin to consider the layout for tablets. An additional media query was used for screen sizes between 550 and 768 pixels width to optimise a clean layout with appropriate whitespace, which included formatting the navigation bar slightly differently and some of the flexbox proportions. 

I used a little JavaScript to add some extra functionality--smooth scrolling and toggling between div visibility (e.g. in the portfolio section, and for the pop-up navigation bar for mobile devices). I initially used jQuery to accomplish these tasks as it had built in features for these functions, but later switched to using plain JS. 

#### Preliminary Designs ####

While brainstorming, I listed words that I wanted to describe the look and feel of the website. These include: fresh, young, modern, abstract, open, futuristic, space, and 90s and early 2000s nostalgia. I began sketching based on these desriptive words and from the moodboard. Below is a sample of these sketches.

![design_elements](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/3_design_elements2.png)

Early on in the process, I also sketched out some logos and experimented with colour. Examples of these are below.

![logo_options](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/4_logo_design2.png)

Combining these design elements together, I created a few layouts, examples of which are shown below in a composite image. I chose to use a monospace font as a counterpoint to the more rounded, organic design elements of the page. The colour choices were based on inspiration from the moodboard - cool tones with accents (e.g. links) in bold colours. 

![early versions screenshots](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/8_early_version_screenshots.png)

Typography tests:

![typography tests part 1](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/9_typography_tests1.png)

#### Redesign ####

I chose to redesign the page on the third full day of working on this assignment. This was in response to a few things. Firstly, the cool tones I used in excess were not bold or inspiring, nor did they fit the overall feeling I wanted to feel and convey to others. I felt as that the original designs and layout lacked a point of view. I wanted the page to be a refreshing, cold shower, not a lukewarm bath. While I wanted to keep certain design elements and the code structure/layout, I went through another cycle of moodboarding for more inspiration. It became clear that I was seeking a more minimalist design with smarter colour choices. 

![second moodboard](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/12_pinterest_moodboard_2.png)

I experimented with colour and font. I wanted a bolder font that had more character, and a colour scheme that felt (re)fresh(ing). I decided on using the red/orange colour that had been used in the early version as an accent colour, now as the primary colour to contrast to the black and white.

![typography tests part 2](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/10_typography_tests2.png)

Combining these elements together, along with design elements from the earlier version, I began reworking the page. Some screenshots taken early after reworking are shown below. I reduced the number of elements and images on the page and in each section to increase whitespace (and decrease clutter), even deciding to forego a logo image. Together, I felt that these elements - or lack thereof - heightened the impact of the page and produced the desired feel and mood. 

![early redesign](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/11_redesign.png)

Second agile sprint:

![trello sprint 2](https://github.com/alxdwa/portfolio-mar-19/blob/master/docs/5a_trello_sprint2.png)

### Usability Considerations & Accessibility ### 

In building this site, I encountered a number of accessibility challenges. The first was the use of anchor tags with `href="javascript:void(0)"` to call onclick javascript functions, which I later read was bad practice as they performed a function rather than changing the url, which makes for difficult/non-intuitive navigation. So, I changed all the relevant anchor tags to buttons. I also changed the navigation system halfway through the project, as my original concept involved using two separate divs switching between `display:none` and `:flex` alternately with changing screen sizes, but this produced hidden links that could be accessed through tabbing as an unintended consequence. 

I implemented some, but not all, accessibility features that the [A11y Project](https://a11yproject.com/checklist) recommends. I was not able to ensure that the page could be intuitively navigated using a keyboard, at least within the timeframe of the assignment. This is because I did not, at the time, understand the consequences of using JavaScript as a means of navigating throughout the page, as opposed to linking to different parts with a `<a href="#section">` tag. Implementing the former means that once a button is clicked e.g. 'Contact', the page doesn't register that the section has been updated and this interrupts the intuitive keyboard navigation throughout the document. I read that there are ways around this, but I was not able to both understand and implement this code within the given time frame of assigment submission, as - unfortunately - I had left my attempts at accessibility rather late in the process. Upon reflection, accessibility should be a focus early on in the process and should inform code design and structure. For this project, implementing and ensuring accessiblity to the best of my abilities is ongoing and needs to continue after the portfolio submission deadline.

Other usability considerations that I did not account for include fallbacks for disabled JavaScript, and browser support other than for Google Chrome. I briefly tested the portfolio also in Safari and Mozilla Firefox. The JS smooth scroll is not supported by Safari, at least, but otherwise the website fully functional.

## Q & A ##

### Describe key events in the development of the internet from the 1980s to today (max. 150 words) ###

### Define and describes the relationship between fundamental aspects of the internet such as: domains, web servers, DNS, and web browsers (max. 150 words) ###

### Reflect on one aspect of the development of internet technologies and how it has contributed to the world today (max. 150 words) ###

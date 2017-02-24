// Using js instead of json because json does not allow multiline strings
let context = {
  sections: [
    {
      title: "Web Development",
      id: "web",
      cards: [
        {
          header: "Devrag",
          dateCreated: "May 08, 2015",
          dateFinished: "Mar 12, 2016",
          description: `Devrag was going to be a website that allowed all types of software developers to find the
          tools that they needed more easily. It would have accomplished this by allowing creators to tag there tools
          with a specific technology that it was for and then developers would search by tag (Kind of like what
          Github just created).`,
          tags: [
            "Ruby on Rails",
            "HTML",
            "MySQL",
            "Javascript",
            "Jquery",
            "Heroku",
            "SCSS"
          ],
          url: "https://github.com/Phaze1D/Devrag",
          largeImg: 'public/dev169-large.jpg',
          landImg: 'public/dev169-land.jpg',
          mediumImg: 'public/dev169-medium.jpg'
        },
        {
          header: "Belleza Organica",
          dateCreated: "Aug 28, 2015",
          dateFinished: "Nov 29, 2016",
          description:`This is a e-commerce website that I built for a client using a PHP framework call Laravel. It also has a
          custom built backoffice where the client can easily manage the site and view reports and graphs. I use alot of
          AWS products like Elasticbean Stalk, Route53, Workmail and a couple more to manage all the backend.` ,
          tags: [
            "Laravel",
            "HTML",
            "MySQL",
            "Javascript",
            "Jquery",
            "AWS Elasticbean Stalk",
            "Less"
          ],
          url: "https://bellezaorganica.com.mx/",
          largeImg: 'public/bell169-large.jpg',
          landImg: 'public/bell169-land.jpg',
          mediumImg: 'public/bell169-medium.jpg'
        },
        {
          header: "Farmage Backend",
          dateCreated: "Apr 7, 2016",
          dateFinished: "Oct 19, 2016",
          description: `This is a MeteorJS Concept App for all types of agriculture business call Farmage. It is met to organize all of the
          data that a agriculture business has into a much more manageable structure. All of the backend works but the frontend
          is just a simple black and white mockup.`,
          tags: [
            "MeteorJS",
            "JADE",
            "MongoDB",
            "Coffescript",
            "Blaze",
            "Less"
          ],
          url: "https://github.com/Phaze1D/Farmage-Concept",
          largeImg: 'public/fb169-large.jpg',
          landImg: 'public/fb169-land.jpg',
          mediumImg: 'public/fb169-medium.jpg'
        },
        {
          header: "Farmage Frontend",
          dateCreated: "Oct 25, 2016",
          dateFinished: "Not Finished",
          description: `This is the frontend for Farmage Web App. I follow the <a href="https://material.io/guidelines/">Material Design Guidelines</a>
          to the best of my abilties. Splitting the app into 2 different projects made it much more maintainable and cleaner. I am hoping to
          create the mobile version of the app with React Native`,
          tags: [
            "ReactJS",
            "HTML",
            "ES6",
            "Javascript",
            "Less"
          ],
          url: "https://github.com/Phaze1D/Farmage_Frontend",
          largeImg: 'public/ff169-large.jpg',
          landImg: 'public/ff169-land.jpg',
          mediumImg: 'public/ff169-medium.jpg'
        },
        {
          header: "Movie Review Project",
          dateCreated: "Feb 15, 2017",
          dateFinished: "Feb 17, 2017",
          description: `A Udacity Project from there Fullstack Nanodegree Course. This is a simple python web app that renders a html template of
          a couple of my favorite movies and shows you their youtube trailers when you click on them. `,
          tags: [
            "Python",
            "HTML"
          ],
          url: "https://github.com/Phaze1D/Udacity-Fullstack-Projects/tree/master/MovieTrailerWebsite",
          largeImg: 'public/mo169-large.jpg',
          landImg: 'public/mo169-land.jpg',
          mediumImg: 'public/mo169-medium.jpg'
        },
        {
          header: "Portfolio",
          dateCreated: "Feb 19, 2017",
          dateFinished: "Feb 22, 2017",
          description: `My Portfolio Website which is also part of the Udacity Nanodegree Fullstack and Frontend Courses. I made this with pure
          Javascript and Handlebars to keep my HTML DRY. Surprisingly, I can up with the design even though I do not consider myself a UI Designer`,
          tags: [
            "Javascript",
            "HTML",
            "Handlebars",
            "Webpack",
            "SCSS"
          ],
          url: "https://github.com/Phaze1D/Portfolio",
          largeImg: 'public/po169-large.jpg',
          landImg: 'public/po169-land.jpg',
          mediumImg: 'public/po169-medium.jpg'
        }
      ]
    },
    {
      title: "Mobile Development",
      id: "mobile",
      cards: [
        {
          header: "Rising Fall Android",
          dateCreated: "Aug 26, 2014",
          dateFinished : "Jan 3, 2015",
          description: `This was the first Android game that I published. It is a simple 2D game where you have to rearrange balls of the same
          color together and eliminate them before the hit the top. It's kind of like a mix between Candy Crush and Tetris. I used a game engine
          called LibGDX which is written in Java and I used some of the Android SDK for app purchases.`,
          tags: [
            "Java",
            "Android",
            "LibGDX"
          ],
          url: "https://play.google.com/store/apps/details?id=com.Phaze1D.RisingFallAndroidV2.android",
          largeImg: 'public/rf169-large.jpg',
          landImg: 'public/rf169-land.jpg',
          mediumImg: 'public/rf169-medium.jpg'
        },
        {
          header: "Rising Fall IOS",
          dateCreated: "Aug 21, 2014",
          dateFinished: "Jan 3, 2015",
          description: `This is the IOS version of Rising Fall built with Apple's Native 2D game called SpriteKit, written in Objective C. This was
          the first IOS game that I published on the App Store. I came up with the idea when I was in college and I decided to start the Project
          during my summer break. `,
          tags: [
            "Objective C",
            "IOS",
            "SpriteKit"
          ],
          url: "https://itunes.apple.com/us/app/rising-fall/id904055570?mt=8",
          largeImg: 'public/rf169-large.jpg',
          landImg: 'public/rf169-land.jpg',
          mediumImg: 'public/rf169-medium.jpg'
        },
        {
          header: "Eschew Cocos2d-X",
          dateCreated: "Mar 3, 2015",
          dateFinished: "Mar 30, 2015",
          description: `This was a small litte game I made to learn some C++. I used a game engine called Cocos2d-X which is written in C++. The
          game is just a simple game where the user has to avoid the color boxs by moving the circle around. It gets harder and harder the longer
          you play it.`,
          tags: [
            "C++",
            "Cocos2d-X",
            "Android",
            "IOS"
          ],
          url: "https://itunes.apple.com/us/app/eschew/id980786957?mt=8",
          largeImg: 'public/es169-large.jpg',
          landImg: 'public/es169-land.jpg',
          mediumImg: 'public/es169-medium.jpg'
        }
      ]
    },
    {
      title: "Education",
      id: "education",
      cards: [
        {
          header: "Santa Monica College",
          dateCreated: "Nov 29, 2011",
          dateFinished: "July 02, 2014",
          description: `I study Computer Science at SMC for 3 years and took alot of courses related to CS including Data Structures and Algorithm
          Analysis. My plan was to transfer to one of the UC colleges like UC Berkeley or UCLA but unfortunately I had to drop out due to
          insufficient funds. I moved back to Mexico to help learn by myself and help my parents with there company.`,
          tags: [
            "Computer Science",
            "College Math",
            "Data Structures",
            "Algorithm Analysis"
          ],
          url: "http://www.smc.edu/Pages/Home.aspx",
          largeImg: 'public/smc169-large.jpg',
          landImg: 'public/smc169-land.jpg',
          mediumImg: 'public/smc169-medium.jpg'
        },
        {
          header: "Frontend Nanodegree",
          dateCreated: "Feb 12, 2017",
          dateFinished: "In Progress",
          description: `Since I drop out of college I have always been looking for a good website that can teach me the skills that I need to become
          a better programmer. I found Udacity late December of 2016 and I thought that this is a great site to learn from top professionals. Even
          though I already had a lot of experience, this was a great way to fine tune my knowledge of coding.`,
          tags: [
            "CSS",
            "HTML",
            "Javascript"
          ],
          url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
          largeImg: 'public/ud169-large.jpg',
          landImg: 'public/ud169-land.jpg',
          mediumImg: 'public/ud169-medium.jpg'
        },
        {
          header: "Fullstack Nanodegree",
          dateCreated: "Feb 12, 2017",
          dateFinished: "In Progress",
          description: `Since I drop out of college I have always been looking for a good website that can teach me the skills that I need to become
          a better programmer. I found Udacity late December of 2016 and I thought that this is a great site to learn from top professionals. Even
          though I already had a lot of experience, this was a great way to fine tune my knowledge of coding.`,
          tags: [
            "CSS",
            "HTML",
            "Javascript",
            "Linux",
            "Python"
          ],
          url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
          largeImg: 'public/ud169-large.jpg',
          landImg: 'public/ud169-land.jpg',
          mediumImg: 'public/ud169-medium.jpg'
        }
      ]
    },
    {
      title: "Work",
      id: "work",
      cards: [
        {
          header: "Vida Flor",
          dateCreated: "Nov 14, 2014",
          dateFinished: "Jan 27, 2017",
          description: `Vida Flor is an organic beauty company that first hire me to help them build a website. I was hired as a freelance
          and after I finished there website they ask me if I could help them modernize there company. So I built them a simple POS system
          and use Microsoft Access to create reports for Data Analysis. I also built a bunch of small automated task in excel and shell scripts
          that simplify their work flow.`,
          tags: [
            "Fullstack Engineer",
            "Database Manager",
            "Data Analysis"
          ],
          url: "https://bellezaorganica.com.mx/",
          largeImg: 'public/vf169-large.jpg',
          landImg: 'public/vf169-land.jpg',
          mediumImg: 'public/vf169-medium.jpg'
        }
      ]
    },
    {
      title: "Work Ethic",
      id: "ethic",
      description: `Throughout my life I have always seek out perfection, not necessarily in others but in myself. I understand that work isn't
      all that life has to offer, but whenever I do work I will make sure that I put 100% of my effort. The balance between work
      and "play" is something that is very important to me because I feel like to much of either can lead to lower quality of life. Because I thrive
      for perfection I never tend to have an end goal, theres is always improvement. This can sometimes lead to unfinished work because I get demoralized
      in my ablities, but I feel that with a good team and the right environment there is no limit to what I can do.`
    },
    {
      title: "Values",
      id: "values",
      description: `Do not intentionally hurt someone whether it be physically or emotionally. That pretty much sums up my values. People tend to
      judge me from afar as being serious, this is probably because I have a very serious resting face, but once they get to know me they quickly
      realize that I am a very chill, friendly, and a kind person. Whenever I get the chance I will always try and help someone in need, whether
      it be a programmer who is stuck or just a random person. I especially enjoy helping someone when neither of us know the solution to the
      problem, I notice that this is a great way to build a relationship.`
    },
    {
      title: "My Mind",
      id: "mind",
      description: `I was born with a very mathematical and logical mind, which is probably why programming is really easy for me. I love solving
      mind puzzles like the Tower of Hanoi, 8 Queens, Rubix Cube and many more. It just gives me a great sense of accomplishment and makes me want
      to solve more. But what I have always been inspired by is artists, they amaze me. Anyone that can do any form of art to me it is like a miracle,
      I have never been good at it. Design and Art has always been my weakest point but it as also been my inspiration. When I write code
      I feel like I am painting on a different type of canvas and creating a different type of beautiful art.`
    }
  ]
}


exports.context = context;

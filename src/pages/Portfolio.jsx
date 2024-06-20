import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Project title="Project 1: Marketing Website" image="https://github.com/fredm23579/marketing-website-module1/raw/main/image.png" deployedLink="https://fredm23579.github.io/marketing-website-module1/" repoLink="https://github.com/fredm23579/marketing-website-module1" />
      <Project title="Project 2: Personal Profile" image="https://github.com/fredm23579/personal-profile/raw/main/Web%20capture_8-1-2024_172830_.jpeg" deployedLink="https://fredm23579.github.io/personal-profile/" repoLink="https://github.com/fredm23579/personal-profile" />
      <Project title="Project 3: Random Password Generator" image="https://github.com/fredm23579/password-generator/raw/main/IMG.jpeg" deployedLink="https://fredm23579.github.io/password-generator/" repoLink="https://github.com/fredm23579/password-generator" />
      <Project title="Project 4: JavaScript Quiz" image="https://github.com/fredm23579/JavaScript-web-api-quiz/raw/main/assets/imgs/img3.jpeg" deployedLink="https://fredm23579.github.io/JavaScript-web-api-quiz/" repoLink="https://github.com/fredm23579/JavaScript-web-api-quiz" />
      <Project title="Project 5: Work Day Scheduler" image="https://github.com/fredm23579/work-day-scheduler/raw/main/assets/imgs/demo.gif" deployedLink="https://fredm23579.github.io/work-day-scheduler/" repoLink="https://github.com/fredm23579/work-day-scheduler/" />
      <Project title="Project 6: Weather Dashboard" image="https://github.com/fredm23579/weather-dashboard/raw/main/image.png" deployedLink="https://fredm23579.github.io/weather-dashboard/" repoLink="https://github.com/fredm23579/weather-dashboard/" />
      <Project title="Project 7: Pets Bytes" image="https://github.com/fredm23579/pets-bytes/raw/main/assets/imgs/Screen%20Shot%202024-02-13%20at%208.50.32%20PM.png" deployedLink="https://fredm23579.github.io/pets-bytes/" repoLink="https://github.com/fredm23579/pets-bytes" />
      <Project title="Project 8: Create Readme" image="https://github.com/fredm23579/create-readme/raw/main/img/create-readme.gif" deployedLink="https://github.com/fredm23579/create-readme" repoLink="https://github.com/fredm23579/create-readme" />
      <Project title="Project 9: Express Note" image="https://github.com/fredm23579/express-note/raw/main/public/assets/demo.gif" deployedLink="https://express-note-fred-c8db53aff1ad.herokuapp.com/" repoLink="https://github.com/fredm23579/express-note" />
      <Project title="Project 10: Svg Creator" image="https://github.com/fredm23579/svg-creator/raw/main/assets/svg-creator.gif" deployedLink="https://github.com/fredm23579/svg-creator" repoLink="https://github.com/fredm23579/svg-creator" />
      <Project title="Project 11: SQL Employee Tracker" image="https://drive.google.com/file/d/1kzjCWhborksz4Yp_1Lof7safywFpYE9N/view?usp=sharing" deployedLink="https://github.com/fredm23579/sql-employee-tracker" repoLink="https://github.com/fredm23579/sql-employee-tracker" />
      <Project title="Project 12: E-Commerce Backend" image="https://drive.google.com/file/d/1laXdhRpmtRAp8MTfPSzD0RYjrWDszhJi/view?usp=drive_link" deployedLink="https://github.com/fredm23579/e-commerce-backend" repoLink="https://github.com/fredm23579/e-commerce-backend" />
      <Project title="Project 13: MVC Tech Blog" image="https://github.com/fredm23579/tech-blog-mvc/blob/main/public/img/Screenshot_tech_blog.png" deployedLink="https://tech-blog-mvc-express-8bd9dcae84c7.herokuapp.com/login" repoLink="https://github.com/fredm23579/tech-blog-mvc" />
      <Project title="Project 14: Travel Blog" image="https://github.com/fredm23579/travel-tales-exchange/blob/main/public/img/clear-water-beaches-florida-2048x917.jpg" deployedLink="https://travel-tales-exchange-50aa2535b133.herokuapp.com/login" repoLink="https://github.com/fredm23579/travel-tales-exchange" />
      <Project title="Project 15: Regex Tutorial (Email Validation)" image="https://gist.github.com/fredm23579/841976d76ec9e98eff5bb09361db1720" deployedLink="https://gist.github.com/fredm23579/841976d76ec9e98eff5bb09361db1720" repoLink="https://github.com/fredm23579/regex-tutorial" />


      {/* Add more Project components as needed */}
    </div>
  </section>
);

export default Portfolio;

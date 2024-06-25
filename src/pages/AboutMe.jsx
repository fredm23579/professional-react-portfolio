import React from 'react';

const AboutMe = () => (
  <section className="p-4 text-center bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <img
      src="https://img-c.udemycdn.com/course/750x422/5619030_e742_4.jpg"
      alt="Fred Motta"
      className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    />
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-2xl font-bold mb-4">Fred Motta M.S. - Full Stack Software Developer</h1>
      <div className="mb-4">
        <p className="text-gray-600">Riverside, CA 92507</p>
        <p className="text-gray-600">
          Email: <a href="mailto:motta@g.ucla.edu" className="text-blue-500 hover:shadow-md">motta@g.ucla.edu</a>
        </p>
        <p className="text-gray-600">
          Phone: <a href="tel:+17604753134" className="text-blue-500 hover:shadow-md">+1 760 475 3134</a>
        </p>
        <p className="text-gray-600">
          LinkedIn: <a href="https://www.linkedin.com/in/fred-motta" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">fred-motta</a>
        </p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Bio</h2>
        <p className="text-gray-700">
          Born in USC Medical Center in Los Angeles, California, I grew up in Rosemead, where I was raised bilingual, fluent in both English and Spanish. I earned a Bachelor of Science in Physics from the University of California, Los Angeles, and a Master of Science in Physics from the University at Albany, State University of New York. Transitioning into software development, I specialize as a Full Stack Developer with a strong foundation in science and a passion for technology. My career is driven by continuous learning and delivering impactful software solutions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Highly skilled and motivated IT professional with expertise in data science, machine learning, computer science, and data analysis. Proficient in modern technologies and tools for IT infrastructure and data management. Extensive experience in teaching, curriculum development, and research in physics. Strong background in scientific instrumentation, troubleshooting, and research studies. Seeking an IT Analyst Intern position to leverage my skills in a healthcare setting.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="pl-5 text-gray-700">
          <p className="mb-2"><span className="font-bold">IT Support:</span> IT infrastructure management, electronics, instrumentation troubleshooting, MS Office, Windows operating systems</p>
          <p className="mb-2"><span className="font-bold">Data Science:</span> Machine Learning, Statistical Modeling, Data Analysis</p>
          <p className="mb-2"><span className="font-bold">Software Development:</span> JavaScript, Python, SQL, Node.js, React.js, HTML, CSS, MongoDB, GraphQL, Express.js, MERN Stack, MATLAB, C, C++, C#, FORTRAN, Java, PowerShell, Mathematica</p>
          <p className="mb-2"><span className="font-bold">Tools:</span> AWS, Google Cloud Platform, Git, GitHub, Tableau, Power BI</p>
          <p className="mb-2"><span className="font-bold">Communication:</span> Technical writing, delivering presentations, simplifying complex concepts</p>
          <p className="mb-2"><span className="font-bold">Languages:</span> English (Fluent), Spanish (Fluent)</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">IT and Data Science Consultant</h3>
          <p className="text-gray-600">Freelance - Riverside, CA (2022 - Present)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Provided IT support and data science consulting services to various clients.</p>
            <p className="mb-2">Assisted in the development and implementation of machine learning models and data analysis projects.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Adjunct Physics Professor</h3>
          <p className="text-gray-600">Riverside Community College District - Norco, CA (2019 - 2022)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Incorporated data science techniques into the physics curriculum.</p>
            <p className="mb-2">Analyzed educational datasets to improve student outcomes through data-driven instructional approaches.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Adjunct Physics Professor</h3>
          <p className="text-gray-600">San Bernardino Valley College - San Bernardino, CA (2016 - 2020)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Instructed undergraduate Physics courses with modern teaching methods and addressed the needs of diverse students, including those with disabilities.</p>
            <p className="mb-2">Developed and delivered interactive physics labs to enhance student learning.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Research Analyst</h3>
          <p className="text-gray-600">Mt. San Jacinto College - San Jacinto, CA (2018 - 2019)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Conducted data analysis using T SQL, Power BI, and Tableau in an Azure environment.</p>
            <p className="mb-2">Developed front-end data dashboards and visualizations.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Physics Professor (Temporary Full-Time)</h3>
          <p className="text-gray-600">College of the Desert - Palm Desert, CA (2017 - 2018)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Oversaw IT infrastructure for physics labs, from procurement to technical support for lab instruments.</p>
            <p className="mb-2">Conducted dynamic classroom instruction for both Calculus and Non-Calculus-based Physics courses.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Scientific Instrumentation Specialist</h3>
          <p className="text-gray-600">California State University - San Bernardino, CA (2015 - 2016)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Managed scientific instrumentation for research in chemistry, physics, geology, and computer engineering.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Graduate Research Assistant</h3>
          <p className="text-gray-600">California State University - Northridge, CA (2004 - 2009)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Conducted research on mathematical and physical models of quantum mechanical many-body systems using efficient numerical algorithms.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Data Analyst</h3>
          <p className="text-gray-600">JT3, LLC - Edwards AFB, CA (2006 - 2008)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Conducted extensive data analysis on information collected from multiple GPS and Inertial Navigation sensors using Kalman filters.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="pl-5 text-gray-700">
          <p className="mb-2">Full Stack Software Development, <a href="https://en.wikipedia.org/wiki/University_of_California,_Riverside" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">University of California, Riverside</a> - Riverside, CA (June 2024)</p>
          <p className="mb-2">Master of Science in Physics, <a href="https://en.wikipedia.org/wiki/University_at_Albany,_SUNY" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">University at Albany, State University of New York</a> - Albany, NY (August 2011)</p>
          <p className="mb-2">Bachelor of Science in Physics, <a href="https://en.wikipedia.org/wiki/University_of_California,_Los_Angeles" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">University of California, Los Angeles</a> - Los Angeles, CA (June 2003)</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <div className="pl-5 text-gray-700">
          <p className="mb-2">Certificate in Full Stack Software Development, University of California, Riverside (June 2024)</p>
          <p className="mb-2">Online Teaching Certification, Riverside Community College District (2019)</p>
          <p className="mb-2">Legal Assistant Certificate</p>
          <p className="mb-2">Interior Design Certificate</p>
          <p className="mb-2">Certificate in Microsoft Office, IT</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Languages</h2>
        <p className="text-gray-700 pl-5 mb-2">Spanish: Fluent</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Volunteer Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Music Instructor</h3>
          <p className="text-gray-600">Self-Employed (January 1993 – September 2012)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Taught guitar lessons, fostering musical skills and creativity.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Volunteer</h3>
          <p className="text-gray-600">Day Laborer Project DTLA (November 2000 – December 2002)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Assisted in various community support activities, enhancing local outreach.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
        <div className="pl-5 text-gray-700">
          <p className="mb-2">Extensive experience in full-stack development using HTML, CSS, JavaScript, React.js, Node.js, and the MERN Stack.</p>
          <p className="mb-2">Proficient in database management and querying with SQL, MySQL, and NoSQL databases.</p>
          <p className="mb-2">Experienced in GraphQL for efficient data querying and optimization.</p>
          <p className="mb-2">Skilled in automation and data processing using Linux and UNIX shell scripting.</p>
          <p className="mb-2">Strong analytical and problem-solving abilities, with a solid background in statistical analysis and research methodologies.</p>
          <p className="mb-2">Fluent in Spanish, enabling effective communication with diverse populations.</p>
        </div>
      </section>
    </div>
  </section>
);

export default AboutMe;

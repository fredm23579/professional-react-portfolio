import React from 'react';

const AboutMe = () => (
  <section className="p-4 text-center">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <img
      src="https://media.licdn.com/dms/image/D5603AQErkP7OXdlzYHTS_CX6tTK33LM4RwnehJvwRE/profile-displayphoto-shrink_800_800/0/1702590874568?e=1710374400&v=beta&t=vvyGsPSvUi8TG1dlzYHTS_CX6tTK33LM4RwnehJvwRE"
      alt="Developer"
      className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    />
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-2xl font-bold mb-4">Fred Motta M.S. - Full Stack Software Developer</h1>
      <div className="mb-4">
        <p className="text-gray-600">Riverside, CA 92507</p>
        <p className="text-gray-600">Email: <a href="mailto:motta@g.ucla.edu" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">motta@g.ucla.edu</a></p>
        <p className="text-gray-600">Phone: <a href="tel:+17604753134" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">+1 760 475 3134</a></p>
        <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/fred-motta" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">fred-motta</a></p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-700 text-left">Versatile Full Stack Developer with over a year of hands-on experience in developing robust web applications using <a href="https://en.wikipedia.org/wiki/Node.js" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Node.js</a>, <a href="https://en.wikipedia.org/wiki/NoSQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">NoSQL databases</a>, and <a href="https://en.wikipedia.org/wiki/GraphQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">GraphQL</a>. Demonstrated ability to collaborate effectively within dynamic teams, enhancing both backend and frontend performance. Passionate about continuous learning and committed to delivering high-quality, impactful software solutions.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="text-gray-700 text-left">
          <div className="mb-2">
            <strong>Web Development:</strong> <a href="https://en.wikipedia.org/wiki/HTML" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">HTML</a>, <a href="https://en.wikipedia.org/wiki/CSS" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">CSS</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">JavaScript</a>, <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">React.js</a>, <a href="https://en.wikipedia.org/wiki/Node.js" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Node.js</a>, <a href="https://en.wikipedia.org/wiki/Express.js" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Express.js</a>, <a href="https://en.wikipedia.org/wiki/MERN_stack" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">MERN Stack</a>, REST API, CRUD, Responsive Web Design, PWA, MVC, <a href="https://en.wikipedia.org/wiki/GraphQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">GraphQL</a>, Bootstrap, Tailwind, e-commerce development
          </div>
          <div className="mb-2">
            <strong>Programming Languages:</strong> <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Python</a>, <a href="https://en.wikipedia.org/wiki/SQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">SQL</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Java</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">C++</a>, <a href="https://en.wikipedia.org/wiki/Fortran" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Fortran</a>, <a href="https://en.wikipedia.org/wiki/Git" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Git</a>, Linux, Unix
          </div>
          <div className="mb-2">
            <strong>Databases:</strong> <a href="https://en.wikipedia.org/wiki/MongoDB" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">MongoDB</a> (NoSQL), MySQL, SQL, PostgreSQL
          </div>
          <div className="mb-2">
            <strong>Cloud Services:</strong> <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">AWS</a> (DynamoDB, AWS Lambda)
          </div>
          <div className="mb-2">
            <strong>Software and Tools:</strong> VS Code, Visual Studio, GitHub, Powershell, API development, Insomnia, Jest, Unit Testing, npm
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Full Stack Software Developer</h3>
          <p className="text-gray-600">Quanta Enterprise LLC - Riverside, CA (January 2021 – March 2023)</p>
          <div className="text-gray-700 text-left">
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Developed and maintained dynamic web applications using <a href="https://en.wikipedia.org/wiki/HTML" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">HTML</a>, <a href="https://en.wikipedia.org/wiki/CSS" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">CSS</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">JavaScript</a>, <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">React.js</a>, and <a href="https://en.wikipedia.org/wiki/Node.js" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Node.js</a>.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Designed and implemented RESTful APIs and CRUD functionalities with the <a href="https://en.wikipedia.org/wiki/MERN_stack" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">MERN Stack</a>, ensuring seamless data flow and interaction.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Integrated <a href="https://en.wikipedia.org/wiki/GraphQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">GraphQL</a> to optimize data querying, improving efficiency and performance.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Enhanced user interface and optimized backend processes, increasing payment processing efficiency by 30% through the implementation of advanced e-commerce systems.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Played a key role in SCRUM and AGILE development environments, accelerating project timelines and improving team productivity by 20%.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Conducted comprehensive data analysis using <a href="https://en.wikipedia.org/wiki/SQL" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">SQL</a> and <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Python</a>, deriving actionable insights to support strategic decision-making.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Adjunct Physics Professor</h3>
          <p className="text-gray-600">Riverside Community College District - Norco, CA (September 2019 – December 2021)</p>
          <div className="text-gray-700 text-left">
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Integrated cutting-edge data science techniques into the physics curriculum, enriching the educational experience.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Utilized data-driven methods to analyze educational outcomes, resulting in improved student performance.
            </p>
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Developed and standardized lab procedures, ensuring a safe and conducive learning environment for a diverse student body.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="text-gray-700 text-left">
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <strong>Full Stack Software Development</strong>, University of California, Riverside - Riverside, CA (June 2024)
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <strong>Master of Science in Physics</strong>, University at Albany, State University of New York - Albany, NY (August 2011)
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <strong>Bachelor of Science in Physics</strong>, University of California, Los Angeles - Los Angeles, CA (June 2003)
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <div className="text-gray-700 text-left">
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <strong>Online Teaching Certification</strong>, Riverside Community College District (January 2019)
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Languages</h2>
        <p className="text-gray-700 text-left hover:bg-gray-100 p-2 rounded transition-colors duration-300">Spanish: Fluent</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Volunteer Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Music Instructor</h3>
          <p className="text-gray-600">Self-Employed (January 1993 – September 2012)</p>
          <div className="text-gray-700 text-left">
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Taught guitar lessons, fostering musical skills and creativity.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Volunteer</h3>
          <p className="text-gray-600">Day Laborer Project DTLA (November 2000 – December 2002)</p>
          <div className="text-gray-700 text-left">
            <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
              Assisted in various community support activities, enhancing local outreach.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
        <div className="text-gray-700 text-left">
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Extensive experience in full-stack development using HTML, CSS, JavaScript, React.js, Node.js, and the MERN Stack.
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Proficient in database management and querying with SQL, MySQL, and NoSQL databases.
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Experienced in GraphQL for efficient data querying and optimization.
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Skilled in automation and data processing using Linux and UNIX shell scripting.
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Strong analytical and problem-solving abilities, with a solid background in statistical analysis and research methodologies.
          </p>
          <p className="hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            Fluent in Spanish, enabling effective communication with diverse populations.
          </p>
        </div>
      </section>
    </div>
  </section>
);

export default AboutMe;

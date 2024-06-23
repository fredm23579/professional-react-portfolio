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
          I was born in USC Medical Center in Los Angeles, California. Growing up in Rosemead, I was raised bilingual, fluent in both English and Spanish. My educational journey took me to the University of California, Los Angeles, where I earned a Bachelor of Science in Physics. I further pursued my studies and obtained a Master of Science in Physics from the University at Albany, State University of New York. With a strong foundation in science and a passion for technology, I transitioned into software development, specializing as a Full Stack Developer. My career has been driven by a commitment to continuous learning and delivering impactful software solutions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Versatile Full Stack Developer with over a year of hands-on experience in developing robust web applications using <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Node.js</a>, <a href="https://en.wikipedia.org/wiki/NoSQL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">NoSQL databases</a>, and <a href="https://en.wikipedia.org/wiki/GraphQL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">GraphQL</a>. Demonstrated ability to collaborate effectively within dynamic teams, enhancing both backend and frontend performance. Passionate about continuous learning and committed to delivering high-quality, impactful software solutions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="pl-5 text-gray-700">
          <p className="mb-2"><span className="font-bold">Web Development:</span> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">HTML</a>, <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">CSS</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">JavaScript</a>, <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">React.js</a>, <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Node.js</a>, <a href="https://en.wikipedia.org/wiki/Express.js" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Express.js</a>, MERN Stack, REST API, CRUD, Responsive Web Design, PWA, MVC, <a href="https://en.wikipedia.org/wiki/GraphQL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">GraphQL</a>, Bootstrap, Tailwind, e-commerce development</p>
          <p className="mb-2"><span className="font-bold">Programming Languages:</span> <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Python</a>, <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">SQL</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Java</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">C/C++</a>, <a href="https://en.wikipedia.org/wiki/Fortran" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Fortran</a>, <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Git</a>, Linux, Unix</p>
          <p className="mb-2"><span className="font-bold">Databases:</span> <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">MongoDB (NoSQL)</a>, MySQL, SQL, PostgreSQL</p>
          <p className="mb-2"><span className="font-bold">Cloud Services:</span> <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">AWS (DynamoDB, AWS Lambda)</a></p>
          <p className="mb-2"><span className="font-bold">Software and Tools:</span> <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">VS Code</a>, <a href="https://en.wikipedia.org/wiki/Microsoft_Visual_Studio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Visual Studio</a>, <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">GitHub</a>, Powershell, API development, Insomnia, Jest, Unit Testing, npm</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Full Stack Software Developer</h3>
          <p className="text-gray-600">Quanta Enterprise LLC - Riverside, CA (January 2021 – March 2023)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Developed and maintained dynamic web applications using <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">HTML</a>, <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">CSS</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">JavaScript</a>, React.js, and Node.js.</p>
            <p className="mb-2">Designed and implemented RESTful APIs and CRUD functionalities with the MERN Stack, ensuring seamless data flow and interaction.</p>
            <p className="mb-2">Integrated <a href="https://en.wikipedia.org/wiki/GraphQL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">GraphQL</a> to optimize data querying, improving efficiency and performance.</p>
            <p className="mb-2">Enhanced user interface and optimized backend processes, increasing payment processing efficiency by 30% through the implementation of advanced e-commerce systems.</p>
            <p className="mb-2">Played a key role in SCRUM and AGILE development environments, accelerating project timelines and improving team productivity by 20%.</p>
            <p className="mb-2">Conducted comprehensive data analysis using SQL and Python, deriving actionable insights to support strategic decision-making.</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Adjunct Physics Professor</h3>
          <p className="text-gray-600">Riverside Community College District - Norco, CA (September 2019 – December 2021)</p>
          <div className="pl-5 text-gray-700">
            <p className="mb-2">Integrated cutting-edge data science techniques into the physics curriculum, enriching the educational experience.</p>
            <p className="mb-2">Utilized data-driven methods to analyze educational outcomes, resulting in improved student performance.</p>
            <p className="mb-2">Developed and standardized lab procedures, ensuring a safe and conducive learning environment for a diverse student body.</p>
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
          <p className="mb-2">Online Teaching Certification, <a href="https://en.wikipedia.org/wiki/Riverside_Community_College_District" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:shadow-md">Riverside Community College District</a> (January 2019)</p>
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

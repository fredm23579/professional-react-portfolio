import React from 'react';

const Resume = () => (
  <section className="p-4 text-center">
    <h2 className="text-2xl font-bold mb-4">Resume</h2>
    <a href="https://linkedin.com/in/fred-motta" download className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-2xl transition duration-300">
      Download Resume
    </a>
    <h3 className="text-xl font-bold mt-8 mb-4">Skills</h3>
   
    <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li className="mb-2">HTML</li>
      <li className="mb-2">CSS</li>
      <li className="mb-2">JavaScript</li>
      <li className="mb-2">React</li>
      <li className="mb-2">Node.js</li>
      <li className="mb-2">Express.js</li>
      <li className="mb-2">MongoDB</li>
      <li className="mb-2">SQL</li>
      <li className="mb-2">Git</li>
      <li className="mb-2">GitHub</li>
      <li className="mb-2">Visual Studio Code</li>
      <li className="mb-2">NoSQL</li>
      <li className="mb-2">GraphQL</li>
      <li className="mb-2">MERN</li>
      <li className="mb-2">PWA</li>
      <li className="mb-2">MySQL</li>
      <li className="mb-2">Bash</li>
      <li className="mb-2">PowerShell</li>
      <li className="mb-2">API development</li>
      <li className="mb-2">CRUD</li>
      <li className="mb-2">REST</li>
      {/* Add more proficiencies as needed */}
    </div>
    </ul>

  </section>
);

export default Resume;

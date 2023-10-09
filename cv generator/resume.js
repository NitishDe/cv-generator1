const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const cvOutput = document.getElementById('cv-output');

generateBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;

  const cvContent = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <h3>Professional Summary</h3>
    <p>Detail-oriented and highly skilled web developer with a strong foundation in computer science and programming.</p>
    <h3>Skills</h3>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>React, Node.js</li>
      <li>Database Management</li>
      </ul>
      <h3>Work Experience</h3>
      <p><strong>Web Developer</strong> - XYZ Company, Cityville, USA (Jan 2018 - Present)</p>
      <p>Developed and maintained the company website, ensuring high performance and responsiveness.</p>
      <p><strong>Junior Developer</strong> - ABC Agency, Townsville, USA (May 2016 - Dec 2017)</p>
      <p>Assisted in designing and implementing web applications. Collaborated with senior developers to create efficient code.</p>
      <h3>Education</h3>
      <p><strong>Bachelor of Science in Computer Science</strong> - City College, Cityville, USA (Graduated in 2016)</p>
    `;
  
    cvOutput.innerHTML = cvContent;
  });
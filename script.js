const output = document.getElementById('output');
const input = document.getElementById('input');

// Focus on input when the page loads
input.focus();

// Typing animation for the welcome message
function typeWelcomeMessage() {
  const welcomeMessage = "Welcome to your terminal portfolio! Type 'help' to see available commands.";
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < welcomeMessage.length) {
      output.innerHTML += welcomeMessage.charAt(i);
      i++;
      output.scrollTop = output.scrollHeight; // Scroll to the bottom
    } else {
      clearInterval(typingInterval);
      output.innerHTML += '<br><br>'; // Add space after the message
    }
  }, 50); // Adjust typing speed (milliseconds)
}

// Call the typing animation when the page loads
typeWelcomeMessage();

// Handle commands
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';
    handleCommand(command);
  }
});

function handleCommand(command) {
  const outputLine = document.createElement('div');
  outputLine.innerHTML = `<span class="prompt">user@portfolio:~$</span> ${command}`;
  output.appendChild(outputLine);

  switch (command.toLowerCase()) {
    case 'help':
      outputLine.innerHTML += `
        <br>Available commands:
        <br><span class="command">about</span> - About me
        <br><span class="command">projects</span> - My projects
        <br><span class="command">ctf</span> - CTF writeups
        <br><span class="command">blog</span> - Blog posts
        <br><span class="command">contact</span> - Contact info
        <br><span class="command">clear</span> - Clear the terminal
      `;
      break;
    case 'about':
      outputLine.innerHTML += `
        <br>Hi! I’m a cybersecurity student passionate about hacking, coding, and solving challenges.
        <br>I love participating in CTFs and building tools to automate tasks.
      `;
      break;
    case 'projects':
      outputLine.innerHTML += `
        <br>My Projects:
        <br>1. <span class="command">Project 1</span> - A tool for network scanning.
        <br>2. <span class="command">Project 2</span> - A Python script for password cracking.
      `;
      break;
    case 'ctf':
      outputLine.innerHTML += `
        <br>CTF Write

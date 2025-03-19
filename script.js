const output = document.getElementById('output');
const input = document.getElementById('input');

// Focus on input when the page loads
input.focus();

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
        <br>CTF Writeups:
        <br>1. <span class="command">Writeup 1</span> - Solution for a reverse engineering challenge.
        <br>2. <span class="command">Writeup 2</span> - Solution for a web exploitation challenge.
      `;
      break;
    case 'blog':
      outputLine.innerHTML += `
        <br>Blog Posts:
        <br>1. <span class="command">Post 1</span> - How to get started with CTFs.
        <br>2. <span class="command">Post 2</span> - Top 10 cybersecurity tools for beginners.
      `;
      break;
    case 'contact':
      outputLine.innerHTML += `
        <br>Contact Me:
        <br>Email: <span class="command">your.email@example.com</span>
        <br>GitHub: <span class="command">github.com/yourusername</span>
      `;
      break;
    case 'clear':
      output.innerHTML = '';
      break;
    default:
      outputLine.innerHTML += `<br>Command not found. Type <span class="command">help</span> for available commands.`;
  }

  // Scroll to the bottom of the output
  output.scrollTop = output.scrollHeight;
}

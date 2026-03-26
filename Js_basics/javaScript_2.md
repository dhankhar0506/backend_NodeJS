# What CAN’T in-browser JavaScript do? and what can do in JS?

- Browser JavaScript runs inside a sandbox environment, meaning it can interact with the webpage while Node.js runs on the server and provides system-level access through built-in modules like fs and os.
  
- Browser JavaScript runs inside a sandbox environment, meaning it can interact with the webpage.
  - File system
  - OS details
  - System processes
  - Hardware directly
  
- Node.js runs outside the browser directly on your computer/server.
  - File system
  - Operating system
  - Network
  - Processes
  
## Explain 'use strict'?

- "use strict" is a JavaScript directive that enables strict mode, which enforces error handling in code to prevent common mistakes and unsafe actions.
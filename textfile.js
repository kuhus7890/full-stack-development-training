    const fs = require('fs');

    const fileName = 'message.txt';
    const fileContent = 'Node.js File System Working!';

    fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log(`File "${fileName}" created and content written successfully!`);
    });
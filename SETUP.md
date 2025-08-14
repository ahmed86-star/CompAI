# CompAI Setup Guide

## Prerequisites

Before running CompAI, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the Windows installer (.msi) for your system

2. **Install Node.js**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation**
   Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

## Running CompAI

Once Node.js is installed, follow these steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Alternative: HTML Demo

If you can't install Node.js right now, you can view a static HTML demo:

1. Open `demo/index.html` in your web browser
2. This provides a basic preview of the CompAI interface

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Restart your terminal after installation
   - Reinstall Node.js if needed

2. **Port 3000 already in use**
   - The development server will automatically use the next available port
   - Check the terminal output for the correct URL

3. **Installation fails**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules folder and package-lock.json
   - Run `npm install` again

### Getting Help

- Check the [Node.js documentation](https://nodejs.org/docs/)
- Visit [Next.js documentation](https://nextjs.org/docs)
- Open an issue on GitHub if you encounter problems

## Development Tools (Optional)

For the best development experience, consider installing:

- **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Git**: [https://git-scm.com/](https://git-scm.com/)
- **Postman**: For testing API endpoints

## Next Steps

After successful installation:

1. Read the [README.md](README.md) for project details
2. Explore the codebase structure
3. Try the search functionality
4. Customize the application for your needs

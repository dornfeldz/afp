# Setting Up Project Locally

## Prerequisites
1. **Node.js**: Install Node.js (version 16 or higher recommended).
2. **MongoDB**: Use a cloud service (e.g., MongoDB Atlas).
3. **Git**: Install Git to clone the repository.
4. **Package Manager**: Use `npm` (comes with Node.js) or `yarn`.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/dornfeldz/afp
cd afp
```

### 2. Install Server Dependencies
```bash
cd server
npm install
```

### 3. Install Client Dependencies
```bash
cd ../client
npm install
```

## Environment Configuration

### Create .env File in Server
Create a `.env` file in the `server` directory with necessary environment variables:

```
MONGO_URL=<YOUR_MOGODB_CONNECTION_STRING>
SESSION_SECRET=<YOUR_SESSION_SECRET_KEY>
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID_KEY>
GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET_KEY>
```

## Development Workflow

### Running the Application

#### Separate Terminal Windows
Terminal 1 - Start Server:
```bash
cd server
npm start
```

Terminal 2 - Start Client:
```bash
cd client
npm run dev
```

## Common Initialization Checks

### Verify MongoDB Connection
- Ensure MongoDB is installed
- Confirm connection string in `.env`
- Check network accessibility

### Node.js Version
```bash
node --version
npm --version
```
Recommended: 
- Node.js: v16+ 
- npm: v8+

## Troubleshooting

### Dependency Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
cd server && npm install
cd ../client && npm install
```

### Environment Variable Errors
- Double-check `.env` file spelling
- Ensure all required variables are present
- Use absolute paths if needed

## Best Practices
- Never commit `.env` to version control
- Use `.gitignore` to exclude sensitive files
- Keep environment-specific configurations separate



<!-- CONTRIBUTING -->
### Contributors:

<a href="https://github.com/dornfeldz/afp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dornfeldz/afp" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Dornfeld Zoltán - [[Linkedin]](inkedin.com/in/zoltán-dornfeld-b23335a9) [[GitHub]](https://github.com/dornfeldz)\
Milán Egri - [[Linkedin]](https://www.linkedin.com/in/milanegri/) [[GitHub]](https://github.com/MilanEgri)\
Haskó Sándor - [[Linkedin]](https://www.linkedin.com/in/s%C3%A1ndor-hask%C3%B3-6b189b25b/) [[GitHub]](https://github.com/SHasko17)\
Péter Juhász - [[GitHub]](https://github.com/realpeoplerealproblem)

Project Link: [[TastyGo]](https://github.com/dornfeldz/afp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

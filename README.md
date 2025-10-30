# Pokémon Client APP

Client app for pokemon-api

## Setup

### Prerequisites:

- Node.js 18+ and npm
- Docker (optional)

## Local Setup

1. Clone the repository

```
git clone <your-repo-url>
cd pokemon
```

2. Install dependencies

```
npm install
```

3. Create environment file

```
cp .env.example .env
```

4. Run in development mode

```
npm run dev
```

The App will be available at http://localhost:3000

## Using docker

```
docker-compose -f docker-compose.dev.yml up
```

## Testing

```
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Code quality

```
# Run linter
npm run lint

```

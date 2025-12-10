# PilotReads

A static website for recommending books to pilots based on ICAO competencies.

## How to Edit Content

All content is managed in a single file: `client/src/data/content.ts`.

### Editing Competencies
Find the `competencies` array. Each competency has:
- `id`: Unique identifier (e.g., "manual-flight").
- `title`: Display name.
- `description`: Short description.
- `icon`: Name of a Lucide React icon (e.g., "Joystick", "Radio").

### Adding/Editing Books
Find the `books` array. Each book object looks like this:

```typescript
{
  id: "book-unique-id",
  title: "Book Title",
  author: "Author Name",
  summary: "Short summary...",
  relevance: "Why this helps the competency...",
  competencyIds: ["manual-flight", "situation-awareness"], // Match IDs from competencies
  links: {
    amazon: "https://amazon.com/...",
    audible: "https://..."
  },
  coverColor: "bg-blue-800" // Optional Tailwind color class for the placeholder cover
}
```

To add a book, simply copy an existing block, paste it, and update the details. Ensure the `competencyIds` match the IDs defined in the competencies list.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev:client
   ```

3. Open your browser to the URL shown (usually http://localhost:5000).

## Building for Production

To create a static build for deployment:

```bash
npm run build
```

The output files will be in the `dist` folder.

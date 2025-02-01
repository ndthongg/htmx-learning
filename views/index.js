const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-swap="innerHTML" hx-target=".book-list">Show Books</button>
          <!-- here -->
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form>
            <input 
            type="text"
            name="title"
            placeholder="Title"
            />
            <input 
            type="text"
            name="author"
            placeholder="Author"
            />
            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Add book</button>
          </form>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
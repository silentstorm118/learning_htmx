const createHomepageTemplate = () => /*html*/`
  <html>
      <head>
          <title>My Reading List</title>
          <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
          <header>
              <h1>My Reading List</h1>
          </header>
          <main>
              <div className="book-list">

              </div>

              <div className="add-book-form">
                  <h2>What do you want to read?</h2>
              </div>


          </main>
      </body>
  </html>
`;

export default createHomepageTemplate;

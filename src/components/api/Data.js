
    const data = {
        add: async ({
          id, title, author, category,
        }) => {
          await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K1Hrtwxd8yrJT2Galg7o/books', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              item_id: id,
              title,
              author,
              category,
            }),
          });
        },
      
        remove: async (id) => {
          await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K1Hrtwxd8yrJT2Galg7o/books/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        },
      
        allBooks: async () => {
          const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K1Hrtwxd8yrJT2Galg7o/books');
          const data = await response.json();
      
          const list = Object.entries(data).map(([id, book]) => {
            const { title, author, category } = book[0];
            return {
              id, title, author, category,
            };
          })
            .sort((a, b) => a.title.localeCompare(b.title));
      
          return list;
        },
      };
      
      export default data;
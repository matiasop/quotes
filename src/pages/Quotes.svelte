<script lang="ts">
  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";

  import type Quote from "../types/Quote";
  import type Metadata from "../types/Metadata";
  import type BookList from "../types/BookList";

  export let params;
  const bookId: string = params.bookId;
  const quotes: Quote[] = quotesComplete[bookId];
  const books: BookList[] = getDataFromJSON<Metadata>(booksMetadata);
  const book: BookList = books.find((b) => b.title === bookId);

  const emptyBookCoverURL =
    "https://drupal.nypl.org/sites-drupal/default/files/blogs/sJ3CT4V.gif";
</script>

<div class="quotes-flex">
  <div class="book-info">
    <h1 class="title">{book.data.book_title}</h1>
    <div class="book-details-container">
      <div class="book-details">
        <p class="info">Author: {book.data.author}</p>
        <p class="info">Pages: {book.data.page_count}</p>
        <p class="info">Language: {book.data.language.toUpperCase()}</p>
      </div>
      <div class="book-details align-end">
        <p />
        {#if book.data.isbn_10 !== ""}
          <p class="info">ISBN: {book.data.isbn_10}</p>
        {:else}
          <p class="info">ISBN: {book.data.isbn_13}</p>
        {/if}
        <p class="info">Published Date: {book.data.published_date}</p>
      </div>
    </div>
    <div class="book-cover-container">
      {#if book.data.thumbnail !== ""}
        <img
          class="book-cover"
          src={book.data.thumbnail}
          alt={book.data.book_title}
        />
      {:else}
        <img
          class="book-cover"
          src={emptyBookCoverURL}
          alt={book.data.book_title}
        />
      {/if}
    </div>
  </div>

  <div class="quotes">
    {#each quotes as quote, index}
      <a class="quote" href="#/quote/{book.title}/{index}">
        <div>
          <h2 class="title">Quote #{index}</h2>
          <div class="quote-info">
            <p class="info">Reading Date: {quote.date} {quote.time}</p>
            <p class="info">Position: {quote.initial_pos}-{quote.final_pos}</p>
          </div>
        </div>
        <div class="quote-text">
          <p>"{quote.quote}"</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .quotes-flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .align-end {
    text-align: end;
  }

  .book-info {
    color: var(--text-color);
    max-width: 420px;
  }

  .book-details {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #888;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .book-details-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .quotes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .quote {
    border: solid #888 1px;
    border-radius: 1%;
    width: 450px;
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .quote:hover {
    border: solid var(--accent-color) 1px;
  }

  .book-cover-container {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
  }

  .title {
    color: var(--text-color);
    font-family: var(--header-font);
  }

  .quote-info {
    color: #888;
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  .quote-text {
    text-decoration: none;
    font-family: var(--body-font);
    color: var(--text-color);
    font-size: 1.5rem;
  }

  .info {
    margin: 0.5rem 0;
  }
</style>

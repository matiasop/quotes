<script lang="ts">
  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";

  import type Quote from "../types/Quote";
  import type Metadata from "../types/Metadata";
  import type BookList from "../types/BookList";

  export let bookId: string;
  export let quoteId: string;

  const quote: Quote = quotesComplete[bookId][quoteId];
  const books: BookList[] = getDataFromJSON<Metadata>(booksMetadata);
  const book: BookList = books.find((b) => b.title === bookId);
</script>

<div class="quote">
  <h1 class="title">{quote.book_title}</h1>
  <h2 class="title">Quote #{quoteId}</h2>
  <div class="info-flex">
    <div class="book-cover-container">
      <img src={book.data.thumbnail} alt={book.data.book_title} />
    </div>
    <div class="quote-info">
      <p class="info">Author: {quote.author}</p>
      <p class="info">Published Date: {book.data.published_date}</p>
      <p class="info">Reading Date: {quote.date} {quote.time}</p>
      <p class="info">Position: {quote.initial_pos}-{quote.final_pos}</p>
    </div>
  </div>
  <div class="quote-text">
    <p>"{quote.quote}"</p>
  </div>
</div>

<style>
  .quote {
    border: solid #888 1px;
    border-radius: 1%;
    max-width: 600px;
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info {
    margin: 0.5rem 0.2rem;
  }

  .info-flex {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .title {
    color: var(--text-color);
    font-family: var(--header-font);
    margin: 0.5rem 0;
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
</style>

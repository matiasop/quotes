<script lang="ts">
  import { link } from "svelte-navigator";
  import { fade } from "svelte/transition";

  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";
  import compareStrings from "../utils/compareStrings";

  import type BookList from "../types/BookList";
  import type Metadata from "../types/Metadata";
  import type Quote from "./Quote.svelte";
  import SortOption from "../types/SortOption";

  import SearchBar from "../components/SearchBar.svelte";

  const emptyBookCoverURL =
    "https://drupal.nypl.org/sites-drupal/default/files/blogs/sJ3CT4V.gif";

  const getReadingDate = (title: string, quotesComplete): string => {
    const quote: Quote = quotesComplete[title][0];
    return quote.date;
  };

  const sortBooks = (
    books: BookList[],
    sortBy: SortOption,
    reverse: boolean
  ): BookList[] => {
    let sortedBooks: BookList[];
    if (sortBy === SortOption.Title) {
      sortedBooks = books.sort((a, b) => compareStrings(a.title, b.title));
    } else if (sortBy === SortOption.Author) {
      sortedBooks = books.sort((a, b) =>
        compareStrings(a.data.author, b.data.author)
      );
    } else if (sortBy === SortOption.PublishedDate) {
      sortedBooks = books.sort((a, b) =>
        compareStrings(a.data.published_date, b.data.published_date)
      );
    } else if (sortBy === SortOption.ReadingDate) {
      sortedBooks = books.sort((a, b) =>
        compareStrings(
          getReadingDate(a.title, quotesComplete),
          getReadingDate(b.title, quotesComplete)
        )
      );
    }
    if (reverse) {
      return sortedBooks.reverse();
    } else {
      return sortedBooks;
    }
  };

  let reverse = false;
  let sortBy: SortOption = SortOption.Title;
  let books: BookList[];
  $: books = sortBooks(
    getDataFromJSON<Metadata>(booksMetadata),
    sortBy,
    reverse
  );
  let filteredBooks: BookList[] = [];
</script>

<div class="books-container">
  <h1 class="title">Books</h1>
  <div class="books-filter">
    <SearchBar allBooks={books} bind:filteredBooks />
    <select bind:value={sortBy}>
      <option value={SortOption.Title}>Title</option>
      <option value={SortOption.Author}>Author</option>
      <option value={SortOption.ReadingDate}>Reading Date</option>
      <option value={SortOption.PublishedDate}>Published Date</option>
    </select>
  </div>
  <div class="reverse">
    <span id="reverse-span">Reverse:</span>
    <input id="reverse-input" type="checkbox" bind:checked={reverse} />
  </div>

  {#key books}
    <div class="books-links-container" in:fade>
      {#each filteredBooks as book}
        <a class="book-link" href="/quotes/{book.title}" use:link>
          <div class="book-info">
            <h3 class="book-title">{book.data.book_title}</h3>
            <p class="book-details">{book.data.author}</p>
            <p class="book-details">Published: {book.data.published_date}</p>
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
        </a>
      {/each}
    </div>
  {/key}
</div>

<style>
  .title {
    display: flex;
    justify-content: center;
  }
  .books-container {
    max-width: 90rem;
  }

  .books-links-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .book-link {
    border: solid #888 1px;
    border-radius: 1%;
    width: 200px;
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .book-link:hover {
    border: solid var(--accent-color) 1px;
  }

  .book-info {
    color: var(--text-color);
  }

  .title {
    color: var(--text-color);
    font-family: var(--header-font);
  }

  .book-title {
    font-family: var(--header-font);
  }

  .book-details {
    font-size: small;
    margin: 0.5rem 0;
    color: #888;
  }

  .book-cover-container {
    padding: 0.5rem 1rem;
  }

  .book-cover {
    min-width: 100%;
  }

  .books-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .reverse {
    display: flex;
    justify-content: center;
  }

  #reverse-input {
    margin: 0 1rem;
    transform: scale(1.5);
  }
</style>

<script lang="ts">
  import { Link } from "svelte-navigator";

  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";
  import compareStrings from "../utils/compareStrings";

  import type BookList from "../types/BookList";
  import type Metadata from "../types/Metadata";
  import type Quote from "./Quote.svelte";
  import SortOption from "../types/SortOption";

  import SearchBar from "../components/SearchBar.svelte";

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

<h1>Books</h1>
<SearchBar allBooks={books} bind:filteredBooks />
<select bind:value={sortBy}>
  <option value={SortOption.Title}>Title</option>
  <option value={SortOption.Author}>Author</option>
  <option value={SortOption.ReadingDate}>Reading Date</option>
  <option value={SortOption.PublishedDate}>Published Date</option>
</select>
<span>Reverse:</span>
<input type="checkbox" bind:checked={reverse} />

{#each filteredBooks as book}
  <div>
    <Link to="/quotes/{book.title}">
      <p>{book.data.book_title} {book.data.author}</p>
      <img src={book.data.thumbnail} alt={book.data.book_title} />
    </Link>
  </div>
{/each}

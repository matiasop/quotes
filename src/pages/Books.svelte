<script lang="ts">
  import { Link } from "svelte-navigator";

  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";
  import compareStrings from "../utils/compareStrings";

  import type Metadata from "../types/Metadata";
  import type BookList from "../types/BookList";
  import SortOption from "../types/SortOption";

  import SearchBar from "../components/SearchBar.svelte";

  const sortBooks = (books: BookList[], sortBy: SortOption): BookList[] => {
    if (sortBy === SortOption.Title) {
      return books.sort((a, b) => compareStrings(a.title, b.title));
    } else if (sortBy === SortOption.Author) {
      return books.sort((a, b) => compareStrings(a.data.author, b.data.author));
    } else if (sortBy === SortOption.Date) {
      return books.sort((a, b) =>
        compareStrings(a.data.published_date, b.data.published_date)
      );
    }
    return books;
  };

  let sortBy: SortOption = SortOption.Title;
  let books: BookList[];
  $: books = sortBooks(getDataFromJSON<Metadata>(booksMetadata), sortBy);
  let filteredBooks: BookList[] = [];
</script>

<h1>Books</h1>
<SearchBar allBooks={books} bind:filteredBooks />
<select bind:value={sortBy}>
  <option value={SortOption.Title}>Title</option>
  <option value={SortOption.Author}>Author</option>
  <option value={SortOption.Date}>Published Date</option>
</select>

{#each filteredBooks as book}
  <div>
    <Link to="/quotes/{book.title}">
      <p>{book.data.book_title} {book.data.author}</p>
      <img src={book.data.thumbnail} alt={book.data.book_title} />
    </Link>
  </div>
{/each}

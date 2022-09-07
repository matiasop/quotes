<script lang="ts">
  import quotesComplete from "../data/quotes_complete.json";

  import type Quote from "../types/Quote";

  export let bookId: string;
  export let quoteId: string;

  const quote: Quote = quotesComplete[bookId][quoteId];
</script>

<h1>{quote.book_title}</h1>

<p>Quote #{quoteId}</p>

<p>{quote.author}</p>
<p>{quote.quote}</p>

import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import SearchResults from '../components/SearchResults';

const BASE_URL = 'https://hatsa.com/api/search/public/afiproducts/search';

const performSearch = (query: string) => fetch(`${BASE_URL}/${query}?dedupe=true`)
  .then((response) => response.json());

export async function getServerSideProps() {
  // Test records with page=1 and pageSize=250 
  const res = await fetch(`${BASE_URL}?dedupe=true&page=1&pagesize=250`)
  const records = await res.json();
  return {
    props: {
      records: records.data,
    },
  }
}

function Search({ records }) {
  const [searchMethod, setSearchMethod] = useState('clientSearch');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleOnChange = debounce((query: string) => {
    setQuery(query);
  }, 1000, { leading: false, trailing: true });

  useEffect(() => {
    if (searchMethod === 'clientSearch') {
      performSearch(query).then(response => {
        setResults(response.data);
      });
      return;
    }
    const results = records.filter((post: { product: { title: string } }) => post.product.title.includes(query));
    setResults(results);
  }, [query, searchMethod]);

  return (
    <div className="p-4">
      <label className="inline-flex items-center mt-3 ml-2 mr-2">
        <input type="radio" name="search" className="form-radio h-5 w-5 text-gray-600" value="clientSearch" checked={searchMethod === 'clientSearch'} onChange={() => setSearchMethod('clientSearch')} /><span className="ml-2 text-gray-700">Client Side Search</span>
      </label>
      <label className="inline-flex items-center mt-3">
        <input type="radio" name="search" className="form-radio h-5 w-5 text-gray-600" value="serverSearch" checked={searchMethod === 'serverSearch'} onChange={() => setSearchMethod('serverSearch')} /> <span className=" ml-2 text-gray-700">Server Side Search</span>
      </label>

      <div className="p-4">
        <label htmlFor="searchQuery" className="mr-4">Search for:</label>
        <input id="searchQuery" type="text" className="border" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <SearchResults results={results} />
    </div>
  );
}

export default Search

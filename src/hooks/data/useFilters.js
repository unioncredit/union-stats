import {useState} from "react";
import {CHECKBOX_FILTER_MODALS, Range, RANGE_FILTER_MODALS} from "../../constants/filters";
import {parseCheckboxQuery, parseRangeQuery} from "../../util/filters";

export default function useFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queries, setQueries] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [rangeValues, setRangeValues] = useState([]);

  const clear = () => {
    setQueries([]);
    setCheckboxValues([]);
    setRangeValues([]);
    setSearchQuery("");
  }

  const addQuery = (key, label, query) => {
    let filter = {
      key: key,
      label: label,
      query: query,
    };

    if (queries.find(f => f.key === key)) {
      setQueries(queries.map(f => f.key === key ? filter : f));
    } else {
      setQueries([...queries, filter]);
    }
  }

  const removeQuery = (key) => {
    setQueries(queries.filter(q => q.key !== key));
    setRangeValues(rangeValues.filter(v => v.key !== key));
    setCheckboxValues(checkboxValues.filter(v => v.key !== key));
  }

  const addCheckboxFilter = (key, values) => {
    const options = CHECKBOX_FILTER_MODALS.find(m => m.key === key);
    const query = parseCheckboxQuery(options, values);
    addQuery(key, `${options.title} · ${values.join(", ")}`, query);

    const value = {
      key: key, values: values,
    };

    if (checkboxValues.find(v => v.key === key)) {
      setCheckboxValues(checkboxValues.map(v => v.key === key ? value : v));
    } else {
      setCheckboxValues([...checkboxValues, value]);
    }
  }

  const addRangeFilter = (key, type, values, isDai) => {
    const options = RANGE_FILTER_MODALS.find(m => m.key === key);
    const query = parseRangeQuery(type, options, values, isDai);
    const title = type === Range.GTE
      ? `${options.title} ≥ ${values[type]}`
      : type === Range.LTE
      ? `${options.title} ≤ ${values[type]}`
      : `${options.title} · ${values[Range.GTE]} - ${values[Range.LTE]}`

    addQuery(key, title, query);
    const value = {
      key: key, selected: type, values: values,
    };

    if (rangeValues.find(v => v.key === key)) {
      setRangeValues(rangeValues.map(v => v.key === key ? value : v));
    } else {
      setRangeValues([...rangeValues, value]);
    }
  }

  return {
    clear,
    queries,
    removeQuery,
    searchQuery,
    setSearchQuery,
    checkboxValues,
    addCheckboxFilter,
    rangeValues,
    addRangeFilter,
  }
}
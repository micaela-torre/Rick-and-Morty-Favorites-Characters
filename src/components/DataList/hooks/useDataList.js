import { useEffect, useState } from 'react';
import { SnackbarUtilities } from '../../../helpers/snackbar-manager';

export const useDataList = ({ adapter, saveExtraInformation, items, filters, title, initialPage, setItems, service, numberOfItems = 6 }) => {
  const [list, setList] = useState(items);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (signal.aborted) return null;
        setIsDataLoading(true);
        if (saveExtraInformation) saveExtraInformation({ page, title });
        const results = await service({ page, ...filters });
        let items = results;
        if (adapter) items = adapter(results);
        if (setItems) setItems(items);
        let newItems = items;
        if (Array.isArray(items)) newItems = items?.slice(0, numberOfItems);
        setList(newItems);
      } catch (e) {
        SnackbarUtilities.error('There was a mistake, please try again later');
      } finally {
        setIsDataLoading(false);
        abortController.abort();
      }
    };

    fetchData();

    return () => {
      setList([]);
    };
    //eslint-disable-next-line
  }, [page]);

  const handleCardCountChange = () => count => setList(list.slice(0, count));

  return {
    isDataLoading,
    list,
    setPage,
    page,
    handleCardCountChange,
  };
};

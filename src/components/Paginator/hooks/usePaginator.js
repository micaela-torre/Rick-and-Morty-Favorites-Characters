import { useContext, useRef, useState } from 'react';
import { EpisodeContext } from '../../../context/EpisodeContext';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../../constants/characters';

export const usePaginator = ({ title, initialPage, page, setPage }) => {
  const initialPagePaginator = useRef(initialPage);
  const [itemPerPage, setItemPerPage] = useState(page);
  const { chosenCharacters } = useContext(EpisodeContext);
  const character1 = chosenCharacters['Character #1'];
  const character2 = chosenCharacters['Character #2'];

  const isCurrentPageMatch = currentPage => {
    return (title === ONE_CHARACTER && currentPage === character2.currentPage) || (title === TWO_CHARACTER && currentPage === character1.currentPage);
  };

  const handleChangePaginator = e => {
    const { name } = e.target;
    let page = itemPerPage;

    if (name === 'next') {
      page = page + 1;
      if (isCurrentPageMatch(page)) page = page + 1;
    } else {
      page = page - 1;
      if (isCurrentPageMatch(page)) page = page - 1;

      if (page < initialPagePaginator?.current) page = initialPagePaginator?.current;
    }

    setItemPerPage(page);
    setPage(page);
  };

  return { handleChangePaginator, itemPerPage, initialPagePaginator };
};

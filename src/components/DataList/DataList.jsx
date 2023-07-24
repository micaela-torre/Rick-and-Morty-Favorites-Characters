import { memo } from 'react';
import { CardCharacter } from '../CardCharacter';
import Paginator from '../Paginator/Paginator';
import styles from './DataList.module.css';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import { useDataList } from './hooks/useDataList';

const DataList = ({ customMessage = 'No results', title = '', initialPage = 1, secondList, showPagination, ...resProps }) => {
  const { isDataLoading, list, setPage, page, handleCardCountChange } = useDataList({ ...resProps, title, initialPage });

  if (isDataLoading) return <Spinner />;
  if (!list?.length) return <Message>{customMessage}</Message>;

  return (
    <section className={styles.characters_list_container}>
      <h3 className={secondList ? styles.second_title : styles.characters_list_title}>{title}</h3>
      <div className={styles.characters_list}>
        {list?.map(item => (
          <CardCharacter key={`${title}-${item.id}`} {...item} character={title} />
        ))}
      </div>
      <Paginator
        key={title}
        setPage={setPage}
        page={page}
        showPagination={showPagination}
        initialPage={initialPage}
        onHandlerChangePagination={handleCardCountChange}
      />
    </section>
  );
};

export default memo(DataList);

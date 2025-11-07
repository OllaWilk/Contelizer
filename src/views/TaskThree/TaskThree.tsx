import { useState } from 'react';
import { useUserQuery } from './hooks/useUserQuery';
import { usePaginationParams } from './hooks/usePaginationParams';
import { UI_TEXTS } from '../TaskOne/content';
import {
  Btn,
  Card,
  ErrorBlock,
  InfoRow,
  LoadingIndicator,
  TaskHeader,
  UserForm,
  Pagination,
  Input,
} from '../../components';
import styles from './TaskThree.module.scss';

const PAGE_SIZE = 12;

export const TaskThree = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const { page, setPage } = usePaginationParams();
  const { data, isLoading, error } = useUserQuery(100, searchTerm);

  const handleEditUser = (userId: number) => {
    setEditingUserId((prev) => (prev === userId ? null : userId));
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setPage(1);
  };

  if (isLoading) return <LoadingIndicator text="Loading coctails..." />;
  if (error instanceof Error)
    return <ErrorBlock title="An error occurred" message={'Failed to fetch events.'} />;

  // Pagination calculations
  const total = data?.length ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageItems = data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) ?? [];

  return (
    <div className={styles.taskThree}>
      <TaskHeader paragraph={UI_TEXTS.taskthree} />
      <Input
        id="search"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        placeholder="Search by name or email..."
      />
      <Btn text="Search" onClick={handleSearch} />
      <Pagination
        total={total}
        pageSize={PAGE_SIZE}
        page={Math.min(page, pageCount)}
        onChange={setPage}
      />
      <div className={styles.grid}>
        {pageItems.map(({ id, name, email, gender, status }) => (
          <Card key={id}>
            {editingUserId === id ? (
              <UserForm user={{ name, id, email, gender, status }} />
            ) : (
              <>
                <TaskHeader paragraph={name} />
                <InfoRow label={'Email'} value={email} />
                <InfoRow label={'Gender'} value={gender} />
                <InfoRow label={'Status'} value={status} />
              </>
            )}
            <div className={styles.actions}>
              {editingUserId === id ? (
                <button onClick={() => handleEditUser(id)}>cancel</button>
              ) : (
                <Btn text="Edit" className={styles.editBtn} onClick={() => handleEditUser(id)} />
              )}
            </div>
          </Card>
        ))}
      </div>
      <div></div>
    </div>
  );
};

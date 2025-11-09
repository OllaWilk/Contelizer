import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../views/TaskThree/utils/http';
import { useState } from 'react';
import type { User } from '../../types/task-three-types';
import { Input } from '../UI/Input/Input';
import { Select } from '../UI/Select/Select';
import styles from './UserForm.module.scss';

type Props = {
  user: User;
};

export const UserForm = ({ user }: Props) => {
  const queryClient = useQueryClient();
  const [userData, setUserData] = useState<User>({
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status,
  });

  const mutation = useMutation({
    mutationFn: (data: Partial<User>) => updateUser(user.id, data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['user', user.id], updatedUser);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Saving user data:', userData);
    mutation.mutate({
      name: userData.name,
      email: userData.email,
      gender: userData.gender,
      status: userData.status,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSave}>
      <Input
        id={'name-' + user.id}
        label="Name"
        type="text"
        value={userData.name}
        onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
      />
      <Input
        id={'email-' + user.id}
        label="Email"
        type="email"
        value={userData.email}
        onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
      />

      <Select
        id={'gender-' + user.id}
        label="Gender"
        value={userData.gender}
        onChange={(e) =>
          setUserData((prev) => ({
            ...prev,
            gender: e.target.value as User['gender'],
          }))
        }
        options={[
          { value: 'male', label: 'male' },
          { value: 'female', label: 'female' },
        ]}
      />

      <Select
        id={'status-' + user.id}
        label="Status"
        value={userData.status}
        onChange={(e) =>
          setUserData((prev) => ({
            ...prev,
            status: e.target.value as User['status'],
          }))
        }
        options={[
          { value: 'active', label: 'active' },
          { value: 'inactive', label: 'inactive' },
        ]}
      />

      <div className={styles.actions}>
        {mutation.isError && (
          <p className={styles.error}>{(mutation.error as Error).message ?? 'Update failed'}</p>
        )}
        <button type="submit" className={styles.saveBtn}>
          Save
        </button>
        {mutation.isSuccess && <p className={styles.ok}>Updated!</p>}
      </div>
    </form>
  );
};

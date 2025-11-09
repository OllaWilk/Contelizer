import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../views/TaskThree/utils/http';
import { useState } from 'react';
import type { EditableKeys, User } from '../../types/task-three-types';
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

  const handleInputChange = (
    key: EditableKeys,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData((prev) => ({ ...prev, [key]: e.target.value }));
  };

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
        label="name"
        type="text"
        value={userData.name}
        onChange={(e) => handleInputChange('name', e)}
      />
      <Input
        id={'email-' + user.id}
        label="Email"
        type="email"
        value={userData.email}
        onChange={(e) => handleInputChange('email', e)}
      />

      <Select
        id={'gender-' + user.id}
        label="Gender"
        value={userData.gender}
        onChange={(e) => handleInputChange('gender', e)}
        options={[
          { value: 'male', label: 'male' },
          { value: 'female', label: 'female' },
        ]}
      />

      <Select
        id={'status-' + user.id}
        label="Status"
        value={userData.status}
        onChange={(e) => handleInputChange('status', e)}
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

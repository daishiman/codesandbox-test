import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';
import axios from 'axios';
import { User } from './types/api/user';
import { UserProfile } from './types/userProfile';

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers()

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : (
        loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {userProfiles?.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )
      )}
    </div>
  );
}

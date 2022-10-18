import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';
import AllUsers from '../AllUsers/AllUsers';
import { getUsersThunk } from '../../Redux/Actions/userAction';

export default function MainPage() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredName = users.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="main-container">
      <div className="search-container">
        <InputBase sx={{ flex: 1, marginLeft: '1rem' }} onChange={changeHandler} />
        <IconButton type="button" aria-label="search" sx={{ color: 'purple' }}><SearchIcon /></IconButton>
      </div>
      <div className="col">
        {filteredName && filteredName.map((el) => (
          <AllUsers
            key={el.key}
            data={el}
          />
        ))}
      </div>
    </div>
  );
}

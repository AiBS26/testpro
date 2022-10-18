import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './AllUsers.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Tooltip } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const info = [
  {
    text: 'Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. Так как дполнительной страницы в JSON нет, а адресс нигде не используется закинул его сюда',
  },
];

const text = info[Object.keys(info)[0]];
const information = text.text;

export default function AllUsers({ data }) {
  const { name, phone, email, address, position_name, department, hire_date } = data;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <div onClick={handleClickOpen}>
        <List sx={{ width: '350px', maxWidth: 800, height: '20rem', bgcolor: '#f9fafb' }}>
          <ListItem alignItems="flex-start" sx={{ fontWeight: 'bolder', marginTop: '1rem' }}>
            <Typography variant="h6" style={{ color: 'bold', marginBottom: '2rem' }}>{name}</Typography>
          </ListItem>
          <ListItem alignItems="flex-start">
            <PhoneIphoneIcon sx={{ color: 'purple' }} />
            &nbsp;&nbsp;&nbsp;
            <ListItemText sx={{ color: '#878787' }}>
              {phone}
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <MailOutlineIcon sx={{ color: 'purple' }} />
            &nbsp;&nbsp;&nbsp;
            <ListItemText sx={{ color: '#878787', textDecoration: 'underline' }}>
              {email}
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        sx={{ marginBottom: '15%' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" style={{ marginLeft: '45%', color: 'purple' }} onClick={handleClose} fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        <DialogContent>
          <ListItem>
            <Typography fontSize={30} variant="h6" sx={{ fontWeight: 'bolder', marginBottom: '25px' }}>
              {name}
            </Typography>
          </ListItem>
          <ListItem sx={{ fontSize: '16px' }}>
            Телефон: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="body2" sx={{ textDecoration: 'underline', color: '#878787', fontSize: '16px' }}>
              {phone}
            </Typography>
          </ListItem>
          <ListItem sx={{ fontSize: '16px' }}>
            Почта: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="body2" sx={{ textDecoration: 'underline', color: '#878787', fontSize: '14px' }}>
              {' '}
              {email}
            </Typography>
          </ListItem>
          <ListItem sx={{ fontSize: '16px' }}>
            Дата приема: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="body2" sx={{ color: '#878787', fontSize: '14px' }}>
              {hire_date}
            </Typography>
          </ListItem>
          <Tooltip title={position_name}>
            <ListItem sx={{ fontSize: '16px' }}>
              Должность: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body2" sx={{ color: '#878787', fontSize: '14px' }}>
                {`${position_name.slice(0, 44)}...`}
              </Typography>
            </ListItem>
          </Tooltip>
          <Tooltip title={department}>
            <ListItem sx={{ fontSize: '16px' }}>
              Подразделение: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body2" sx={{ color: '#878787', fontSize: '14px' }}>
                {`${department.slice(0, 47)}...`}
              </Typography>
            </ListItem>
          </Tooltip>
          <Typography variant="h3" fontSize={16} sx={{ marginTop: '2rem', marginLeft: '1rem', fontWeight: '510' }}>Дополнительная информация:</Typography>
          <ListItem>
            <Typography variant="body2" fontSize={14} sx={{ color: '#878787' }}>
              {`${information} ${address}`}
            </Typography>
          </ListItem>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

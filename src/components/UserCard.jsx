import { useEffect } from "react";
import { Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CardUser(user) {
  return (
    <Card
    sx={{
      display: 'inline-block', 
      width: '100%',
      backgroundColor: '#f5f5f5',
      color: '#000',
      justifyContent: 'center',
      alignItems: 'center'
  }}
  >
    <CardContent>
      <PhoneIcon/>
      <h2>{user.phone}</h2>
    </CardContent>
    <CardContent>
      <h2>{user.email}</h2>
      <AlternateEmailIcon/>
    </CardContent>
    <CardContent>
      <h2>{user.address}</h2>
      <LocationOnIcon/>
    </CardContent>
  </Card>
  )
}

export default function UserCard(user) {
  useEffect(() => {console.log(user)}, [user]);

  return user ? <CardUser user={user.user}/> : <h1>No user found</h1>
}
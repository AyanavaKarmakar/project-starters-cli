import { Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';

function App() {
  /**
   * API Reference: https://github.com/AyanavaKarmakar/rest-api
   */
  const api = 'https://ak-rest-api-v1.herokuapp.com';
  const [userData, setUserData] = useState([]);

  /**
   * fetches user data as soon as the page is loaded
   */
  useEffect(() => {
    try {
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  },[])

  /**
   * fetches users from the api
   */
  const fetchUserData = async() => {
    try {
      const response = await fetch(`${api}/users`);
      const jsonData = await response.json();
      console.log(jsonData);
      setUserData(jsonData);      
    } catch (error) {
      console.log(error);
      console.log("Something went wrong! Please try again!");
    }
  }
  
  /**
   * List adapted from MUI.
   * Ref: https://mui.com/material-ui/react-list/#selected-listitem
   */
  return (
    <Paper elevation={3}>
      <List>
        {userData.map((users) => {
          /**
           * destructuring properties of each user object
           * for better efficiency
           */
          const {firstName, lastName, age, id} = users
          return (
            <>
              <ListItem key={id}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText
                        primary={`${firstName} ${lastName}`}
                        secondary={`Age: ${age}`}
                />
              </ListItem>
            </>
          )
        })}
    </List>
    </Paper>
  )
}

export default App

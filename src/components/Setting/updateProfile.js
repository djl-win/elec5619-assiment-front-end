import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { success, error, warn } from '../../utils/message.js'
import { reqUpdateProfile } from '../../api'

const UpdateProfile = (props) => {

  const initialFormState = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  };

  const [values, setValues] = useState(initialFormState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const adminUsername = values.username;
    const peopleEmail = values.email;
    const peoplePhone = values.phone;
    const adminPassword = values.password;
    const userConfirm = values.confirm;

    if (adminUsername === null || adminUsername === '') {
      warn("🦄 Please enter username!")
      return;
    } else if (peopleEmail === null || peopleEmail === '') {
      warn("🦄 Please enter email!")
      return;
    } else if (peoplePhone === null || peoplePhone === '') {
      warn("🦄 Please enter phone!")
      return;
    } else if (adminPassword === null || adminPassword === '') {
      warn("🦄 Please enter new password!")
      return;
    } else if (userConfirm === null || userConfirm === '') {
      warn("🦄 Please enter confirm password!")
      return;
    } else if (userConfirm !== adminPassword) {
      warn("🦄 Should be same as the password")
      return;
    } 

    const response = await reqUpdateProfile(adminUsername, peopleEmail, peoplePhone, adminPassword);

    if (response.code === 200) {
      success("🦄 " + response.data)
      setValues(initialFormState);
    } else {
      error("🦄 " + response.msg)
    }


  }



  return (
    <form {...props} onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          title="Update Profile"
        />
        <Divider />
        <CardContent>
            <TextField
                fullWidth
                label="Username"
                margin="normal"
                name="username"
                onChange={handleChange}
                type="text"
                value={values.username}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                onChange={handleChange}
                type="text"
                value={values.email}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Phone"
                margin="normal"
                name="phone"
                onChange={handleChange}
                type="text"
                value={values.phone}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Confirm password"
                margin="normal"
                name="confirm"
                onChange={handleChange}
                type="password"
                value={values.confirm}
                variant="outlined"
            />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default UpdateProfile;
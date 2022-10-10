import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

const updateProfile = (props) => {
  /*const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };*/

  return (
    <form {...props}>
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
                //onChange={handleChange}
                type="text"
                //value={values.password}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                //onChange={handleChange}
                type="text"
                //value={values.password}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Phone"
                margin="normal"
                name="phone"
                //onChange={handleChange}
                type="text"
                //value={values.password}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                //onChange={handleChange}
                type="password"
                //value={values.password}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Confirm password"
                margin="normal"
                name="confirm"
                //onChange={handleChange}
                type="password"
                //value={values.confirm}
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
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default updateProfile;
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfuly');
      window.setTimeout(() => {
        location.assign('/'); // navigate to homepage
      }, 1000);
    }
  } catch (err) {
    showAlert('error', 'Logged in faild');
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v1/users/logout',
    });
    console.log('logout function work');
    if ((res.data.status = 'success')) location.reload(true); // setting this to true will 'force' server to reload page
  } catch (err) {
    showAlert('error', 'Error loggin out. Try again!');
  }
};

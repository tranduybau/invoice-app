import firebase from 'firebase';

const getInfo = () => new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged((userInfo) => {
    if (userInfo) {
      resolve(userInfo);
    } else {
      reject();
    }
  });
});

const loginWIthPassword = ({ email, password }) => new Promise((resolve, reject) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
    resolve(result);
  }).catch(() => {
    reject(new Error('Wrong Email/Password'));
  });
});

export default {
  getInfo,
  loginWIthPassword,
};

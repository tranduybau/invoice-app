import { isEmpty, get } from 'lodash';

const showMessage = (theMessage) => {
  // eslint-disable-next-line no-console
  console.log(theMessage);
};

const _ = { isEmpty, get, showMessage };

export default _;

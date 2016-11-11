function deleteCustomer() {
  return {
    type: 'DELETE_CUSTOMER',
  };
}

function submitCustomer() {
  return {
    type: 'SUBMIT_CUSTOMER',
  };
}

function updateCustomer(data) {
  return {
    type: 'UPDATE_CUSTOMER',
    data,
  };
}

export default {
  deleteCustomer,
  submitCustomer,
  updateCustomer,
};

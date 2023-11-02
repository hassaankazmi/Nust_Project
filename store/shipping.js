import { getField, updateField } from 'vuex-map-fields'
import { validateEmail, isEmpty } from "@/common/AppUtils.js";
export const state = () => ({
  email: '',
  fristName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  region: '',
  city: '',
  countryCode: 'US',
  zipCode: '',
  apartment: '',
  shippingId: 0
})


export const mutations = {
  updateField
}
export const getters = {
  getField,
  isValid: (state) => {
    if (
      validateEmail(state.email) &&
      !isEmpty(state.fristName) &&
      !isEmpty(state.lastName) &&
      !isEmpty(state.address) &&
      !isEmpty(state.region) &&
      !isEmpty(state.city) &&
      !isEmpty(state.zipCode) &&
      !isEmpty(state.countryCode)
    ) {
      return true;
    }
    return false;
  }
}

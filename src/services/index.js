import {
  getCartDetails,
  addToCart,
  updateInCart,
  removeFromCart
} from './cartService'
import {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newEditAddress,
  deleteAddress,
  getUserRank
} from './userService'

import {
  getTopIcons,
  getMenu
} from './headerService'

import {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
} from './homeService'

import {
  getProduct,
  getProductFilters,
  productDetails
} from './productService'

import {
  getContentModule,
  getFooterContent
} from './footerService'
export const CartServices = {
  getCartDetails,
  addToCart,
  updateInCart,
  removeFromCart
}
export const UserServices = {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newEditAddress,
  deleteAddress,
  getUserRank
}

export const HeaderServices = {
  getTopIcons,
  getMenu
}

export const HomeServices = {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
}

export const ProductServices = {
  getProduct,
  getProductFilters,
  productDetails
}

export const FooterServices = {
  getContentModule,
  getFooterContent
}

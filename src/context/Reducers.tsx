import {
  CartProductsModel,
  FilterProductsModel,
  ProductModel,
  Sorting,
} from '../components/model'

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: ProductModel }
  | { type: 'REMOVE_FROM_CART'; payload: ProductModel }
  | { type: 'CHANGE_CART_QTY'; payload: { id: string; qty: number } }

export type FilterProductAction =
  | { type: 'SORT_BY_PRICE'; payload: Sorting }
  | { type: 'FILTER_BY_STOCK' }
  | { type: 'FILTER_BY_DELIVERY' }
  | { type: 'FILTER_BY_RATING'; payload: number }
  | { type: 'FILTER_BY_SEARCH'; payload: string }
  | { type: 'CLEAR_FILTERS' }

export const cartReducer = (
  state: CartProductsModel,
  action: CartAction
): CartProductsModel => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      }
    default:
      return state
  }
}

export const filterProductReducer = (
  state: FilterProductsModel,
  action: FilterProductAction
): FilterProductsModel => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload }
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock }
    case 'FILTER_BY_DELIVERY':
      return { ...state, byFastDelivery: !state.byFastDelivery }
    case 'FILTER_BY_RATING':
      return { ...state, byRating: action.payload }
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload }
    case 'CLEAR_FILTERS':
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: '',
        sort: null,
      }
    default:
      return state
  }
}

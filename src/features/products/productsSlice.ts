import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import goods from 'db/goods.json';
import {
  IFilter,
  IProduct,
  IBrand,
  ISort,
  SortEnum,
  ICategory,
  categories,
  CategoryKey,
} from 'interfaces';

export interface ProductsState {
  products: IProduct[];
  filter: IFilter;
  category: ICategory;
  sort: ISort;
}

const initialState: ProductsState = {
  products: [],
  filter: {
    priceLow: null,
    priceHigh: null,
    brands: [],
  },
  category: {
    active: null,
    list: categories,
  },
  sort: {
    field: SortEnum.name,
    direction: 'down',
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state) => {
      let ls = localStorage.getItem('products');
      if (ls) {
        state.products = JSON.parse(ls) as IProduct[];
      } else {
        localStorage.setItem('products', JSON.stringify(goods));
        state.products = goods as IProduct[];
      }
    },

    setFilter: (state, action: PayloadAction<Partial<IFilter>>) => {
      state.filter = { ...state.filter, ...action.payload };
    },

    resetFilter: (state) => {
      state.filter = {
        priceLow: null,
        priceHigh: null,
        brands: [],
      };
    },

    setSort: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },

    setCategory: (state, action: PayloadAction<CategoryKey>) => {
      state.category.active = action.payload;
    },

    resetCategory: (state) => {
      state.category.active = null;
    },
  },
});

export const {
  loadProducts,
  setFilter,
  resetFilter,
  setSort,
  setCategory,
  resetCategory,
} = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectFilterBrands = (state: RootState) =>
  state.products.filter.brands;

export const selectSortedField = (state: RootState) =>
  state.products.sort.field;
export const selectSortedDirection = (state: RootState) =>
  state.products.sort.direction;

export const selectCategories = (state: RootState) =>
  state.products.category.list;
export const selectActiveCategory = (state: RootState) =>
  state.products.category.active;
export const selectCategoryProducts = (state: RootState) =>
  state.products.products.filter((product: IProduct) => {
    const category = state.products.category.active;
    return category ? product.groups.includes(category) : true;
  });

const checkProductMatch = (product: IProduct, filter: IFilter) => {
  const { priceLow, priceHigh, brands } = filter;

  if (priceLow && product.price < priceLow) return false;
  if (priceHigh && product.price > priceHigh) return false;
  if (brands.length && !brands.includes(product.brand)) return false;

  return true;
};

const sortProducts = (products: IProduct[], sort: ISort) => {
  return products.sort((a, b) => {
    let compareNum: number;

    switch (sort.field) {
      case SortEnum.name:
        compareNum = a.title.localeCompare(b.title);
        break;
      case SortEnum.price:
        compareNum = a.price - b.price;
        break;
      default:
        throw new Error('unknow sort type');
    }

    return sort.direction === 'up' ? -compareNum : compareNum;
  });
};

export const selectSortedFilteredProducts = createSelector(
  [
    selectCategoryProducts,
    (state) => state.products.filter,
    (state) => state.products.sort,
  ],
  (products, filter, sort) =>
    sortProducts(
      products.filter((product: IProduct) =>
        checkProductMatch(product, filter)
      ),
      sort
    )
);

export const selectBrands = createSelector(
  [selectSortedFilteredProducts],
  (products) => {
    const brandsObj: Record<string, number> = {};

    products.forEach((product) => {
      brandsObj[product.brand]
        ? brandsObj[product.brand]++
        : (brandsObj[product.brand] = 1);
    });

    const brandsArr: IBrand[] = Object.entries(brandsObj).map((brand) => {
      return {
        title: brand[0],
        quantity: brand[1],
      };
    });

    return brandsArr;
  }
);

export default productsSlice.reducer;

import { create } from "zustand";
import { getRequest, createRequest, updateRequest, deleteRequest } from "../services/services";

export const productStore = create()((set, get) => {
  const baseURL = 'product'

  return {
    product: [],
    openModal: false,
    updateData: {},
    loading: false,
    limit: 20,
    fullRows: 0,
    page: 1,

    getProduct: async () => {
      const product = await getRequest(baseURL)
      set({ product })
    },

    getFilterProduct: async (data) => {
      const { page, pageSize, category } = data
      const filterURL = `${baseURL}&page=${page}&pageSize=${pageSize}&category=${category}` 
      const { product, offset } = await getRequest(filterURL)
      set({ product })
    },

    createProduct: async (data) => {
      const product = await createRequest(baseURL, data)
      set((state) => ({ product: [...state.product, product] }))
    },

    updateProduct: async (data) => {
      const updateProduct = await updateRequest(baseURL, data)
      const { product } = get()
      const newProduct = structuredClone(product)
      const updateArray = newProduct.map(obj => {
        if (obj.id === updateProduct.id) {
          return updateProduct.id
        } else {
          return obj
        }
      })
      set({ product: updateArray })
    },

    deleteProduct: async (data) => {
      const delteProduct = await deleteRequest(baseURL, data)
      const { product } = get()
      const newProduct = structuredClone(product)
      const deleteArray = newProduct.map(obj => {
        if (obj.id === delteProduct.id) {
          return delteProduct.id
        } else {
          return obj
        }
      })
      set({ product: deleteArray })
    },
  
    showModal: async () => {
      set({ openModal: true })
    },

    closeModal: async () => {
      set({ openModal: false })
    },

    setUpdateData: async (data) => {
      set({ updateData: data })
    }
  }
})
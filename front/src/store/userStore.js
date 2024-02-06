import { create } from 'zustand'
import { getRequest, createRequest, updateRequest, deleteRequest } from '../services/services'

export const userStore = create()((set, get) => {
  const baseUrl = 'user'

  return {
    users: [],
    openModal: false,
    updateData: {},
    loading: false,
    limit: 500,
    fullRows: 0,
    page: 1,
  }
})
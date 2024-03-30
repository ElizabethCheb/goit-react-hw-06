import { createSelector, createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Додати контакт
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    // Видалити контакт
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    // Встановити стан завантаження
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Встановити помилку
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const selectContacts = state => state.contacts.items;

// Selector for filtered contacts
export const selectFilteredContacts = createSelector(
  [selectContacts, state => state.filters.name],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
);

// Export the reducer and actions
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
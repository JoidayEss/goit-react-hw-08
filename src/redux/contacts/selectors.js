import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const isLoading = (state) => state.contacts.isLoading;
export const isError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log("Contacts from state:", contacts);
    console.log("Filter from state:", filter);
    const normalizedFilter = (filter || "").toLowerCase();
    return contacts.filter((contact) =>
      (contact.name || "").toLowerCase().includes(normalizedFilter)
    );
  }
);

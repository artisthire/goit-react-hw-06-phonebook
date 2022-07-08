const getContacts = state => state.contacts.items;
const getFilterValue = state => state.contacts.filter;

const getVisibleContacts = state => {
  const filterValue = getFilterValue(state);
  const contacts = getContacts(state);

  const normalizedFilter = filterValue.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return visibleContacts;
};

export { getContacts, getVisibleContacts, getFilterValue };

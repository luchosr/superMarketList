# Supermarket List Challenge:

A React.js challenge with the following requirements:

- Needs to display a modal.
- Needs to persist data on local storage.
- "Save" option must control that the input is not empty and add the item to the list and close modal. "Cancel" just close the modal.
- Each element of the list display the item text and also has a button with the option "Remove" or "Delete"
- Use just plain react (no state manager library).
- You must have an api.js file that expose functions to get all items, to add an item and to remove an item. These functions must return promises but internally can just add and remove items from an array in memory or save in local storage. You must also use the npm package delay or similar to emulate async and to see how the app behaves when is loading).

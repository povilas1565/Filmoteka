/**
 * Function to save an element in localStorage
 * @param key key of the item where want to save the element
 * @param element element to save
 * @returns the element to save or anything if the element already exists in the key
 */
export const saveInStorage = (key, element) => {
    // Get elements in localStorage
    let elements = JSON.parse(localStorage.getItem(key));

    // Validate if the elements are in an array
    if (Array.isArray(elements)) {
        // Iterate over the elements to validate if the element provided already exists
        for (const movie of elements) {
            if (movie.id == element.id) {
                // Return false if the element already exists
                return false;
            }
        }
        // Add the new element in the array
        elements.push(element);
    } else {
        // Create an array with the new element
        elements = [element];
    }

    // Save in localStorage
    localStorage.setItem(key, JSON.stringify(elements));

    // Return true if the element was saved
    return true;
}
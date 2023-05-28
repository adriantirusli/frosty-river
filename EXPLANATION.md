# Frosty River

Frosty River is a Commodity Data based on location in Indonesia.
The live version is on [frosty-river.vercel.com](https://frosty-river.vercel.app/).

## User Flows
1. View Commodity Table
    - User visits the web app and is presented with the commodity table.
    - The table displays a list of commodities with various columns such as UUID, Komoditas, Provinsi, Kota, Ukuran, Harga, Tanggal Parsed, and Timestamp.
    - User can scroll through the table to view all the commodities.
    - User can see pagination to navigate through multiple pages of the table if necessary.
    - User can see a loading indicator while the table is being loaded or updated.

2. Search for Commodity, City or Province
    - User enters a search term in the search input field provided above the commodity table.
    - The app performs a live search and filters the table based on the entered search term.
    - The table updates dynamically to show only the commodities that match the search term.

3. Sort Commodity Table
    - User clicks on a column header in the commodity table to sort the table based on that column.
    - The table is sorted in ascending order based on the selected column.
    - User clicks on the same column header again to toggle between ascending and descending order.
    - The table updates dynamically to reflect the sorted order.

4. Filter Commodity Table
    - The table is filtered based on the selected size.
    - Only commodities that meet the selected size are displayed in the table.

5. Add Commodity
    - User clicks on a button to add a new commodity.
    - User able to go back to homepage through breadcrumb.
    - The app navigates to a separate page for adding commodity.
    - User submits the form to save the changes.

## Accessibility
1. Keyboard Accessibility:
    - All interactive elements, such as buttons, links, and input fields, should be keyboard accessible.
    - Include keyboard focus indicators, such as outlines or custom styling, to make it clear which element has keyboard focus.

2. Semantic Markup:
    - Use semantic HTML elements, such as `<nav>, <input>, <table>, <th>, <tr>, and <td>, etc` to structure the pages.
    - This allows screen readers and other assistive technologies to interpret and navigate the table correctly.

3. Color Contrast:
    - Use sufficient color contrast between the text and background to ensure readability for users with visual impairments.
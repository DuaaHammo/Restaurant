# Restaurant

- Food Name
- Types of Food (select field) with the following options:
  - Fruit and vegetables
  - Starchy food
  - Dairy
  - Protein
  - Fat
- Price
- Submit button

## Footer

The footer section will include social media links and copyright.

## JavaScript

In JavaScript, you will implement the following functionalities:

1. Create a constructor to generate a food object. The food object will have the following properties:
   - Food ID
   - Food Name
   - Type
   - Price

2. Each time the form is submitted, create an instance of the food object and populate it with the data from the form inputs.

3. Implement a method to generate a unique four-digit ID for the food object.

4. Add an event listener to capture the form data dynamically, instead of using hardcoded data.

5. Create a render prototype method to display each food name and its corresponding information from the form on the home page. You can render this information as a table view.
__ 

# Home page:

* Data from the form is saved in local storage as JSON when the submit button is clicked.
* The page has a header with navigation links to other pages.
* The table is moved to the statistics page.
* The footer includes social media links and copyright.

# Statistics page:

* The header allows navigation to other pages.
* The table is populated with data from local storage and rendered on the statistics page.
* The footer contains social media links and copyright.
* Use a separate JavaScript file, statistics.js, to handle rendering and data persistence.
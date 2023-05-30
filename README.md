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

Example Table View:

| Food Name  | Type               | Price |
|------------|--------------------|-------|
| Apple      | Fruit and vegetables | $2.50 |
| Potato     | Starchy food        | $1.00 |
| Milk       | Dairy              | $3.00 |
| Chicken    | Protein            | $5.50 |
| Olive Oil  | Fat                | $4.00 |
| ...        | ...                | ...   |


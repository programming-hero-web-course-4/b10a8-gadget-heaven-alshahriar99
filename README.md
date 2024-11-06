# List of React Fundamental concepts used in the project

1.JSX : Allows HTML-like syntax in JavaScript to define the structure and layout of the components, making code more readable and easier to manage.

2.Context API : Provides a way to share state across multiple components without prop drilling, potentially useful for cart and wishlist functionality.

3.Routing (react-router-dom): Manages navigation between different pages (e.g., Home, Product Details, Cart, and Contact pages).
4.Event Handling: Functions such as handleShowModal or handleSubmit are used to manage user interactions, like clicking a button or submitting a form.

5.Hooks:
useState: Manages component-level state 
useEffect: Handles side effects like fetching data when components load.
useNavigate: For navigating between pages programmatically after specific actions .
6.Components: Reusable, self-contained units of UI, such as ContactForm, ProductCard, Cart, and Modal. Components help in organizing and structuring the application.

# What you have used for handling and managing data (context
API/local storage)
*local storage

# 5 features of your website/project

1.Product Catalog and Details:
A homepage displaying a list of products with image, title, and price.
Clicking on a product card takes users to a detailed view, providing full product information, images, and the option to add the item to the cart or wishlist.

2.Cart and Wishlist Management:
A dedicated section with two tabs for Cart and Wishlist.
Users can add or remove items, view quantities, and see the total price in the cart.

3.Purchase Flow with Modal Confirmation:
A "Purchase" button that, when clicked, displays a congratulatory modal, empties the cart, and resets the total price without reloading the page.

4.Category-Based Data Display and Filtering: Data is categorized (e.g., by product type or feature), and users can filter the displayed data by category to easily navigate through the site.

5.User-Friendly Contact Page : A visually appealing contact page with a simple, clean design that includes a contact form for inquiries and a login form at the end for user authentication
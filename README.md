# Hotel Management API

Welcome to the Hotel Management API documentation. This API provides endpoints for managing persons and menu items in a hotel management system. Below is a detailed description of each endpoint:

## Persons Endpoints

### Create a Person

- **Endpoint:** `POST /persons`
- **Description:** Creates a new person.
- **Request Body:**
  - `name` (String, required): The name of the person.
  - `age` (Number): The age of the person.
  - `work` (String, required): The type of work the person does (e.g., chef, waiter, manager).
  - `mobile` (String, required): The mobile number of the person.
  - `email` (String, required): The email address of the person.
  - `address` (String): The address of the person.
- **Response:** Returns the newly created person object.

### Get All Persons

- **Endpoint:** `GET /persons`
- **Description:** Retrieves all persons.
- **Response:** Returns an array of all persons.

### Get Persons by Work Type

- **Endpoint:** `GET /persons/:workType`
- **Description:** Retrieves persons based on their work type.
- **Parameters:**
  - `workType` (String): The type of work to filter persons (e.g., chef, waiter, manager).
- **Response:** Returns an array of persons with the specified work type.

### Update a Person

- **Endpoint:** `PUT /persons/:id`
- **Description:** Updates the details of a person by ID.
- **Parameters:**
  - `id` (String): The ID of the person to update.
- **Request Body:** Contains the fields to update.
- **Response:** Returns the updated person object.

### Delete a Person

- **Endpoint:** `DELETE /persons/:id`
- **Description:** Deletes a person by ID.
- **Parameters:**
  - `id` (String): The ID of the person to delete.
- **Response:** Returns a message indicating the deletion success.

## Menu Items Endpoints

### Create a Menu Item

- **Endpoint:** `POST /menu-items`
- **Description:** Creates a new menu item.
- **Request Body:**
  - `name` (String, required): The name of the menu item.
  - `price` (Number, required): The price of the menu item.
  - `taste` (String, required): The taste profile of the menu item (e.g., sweet, spicy, sour).
  - `is_drink` (Boolean): Indicates if the menu item is a drink (default: false).
  - `ingredients` (Array of Strings): The list of ingredients used in the menu item.
  - `num_sales` (Number): The number of sales for the menu item (default: 0).
- **Response:** Returns the newly created menu item object.

### Get All Menu Items

- **Endpoint:** `GET /menu-items`
- **Description:** Retrieves all menu items.
- **Response:** Returns an array of all menu items.

---

## How to Use

1. **Creating a Person:** Send a POST request to `/persons` with the required details in the request body to create a new person.
2. **Getting All Persons:** Send a GET request to `/persons` to retrieve a list of all persons.
3. **Getting Persons by Work Type:** Send a GET request to `/persons/:workType` with the desired work type as a parameter to filter persons by their work type.
4. **Updating a Person:** Send a PUT request to `/persons/:id` with the ID of the person to update and the updated details in the request body.
5. **Deleting a Person:** Send a DELETE request to `/persons/:id` with the ID of the person to delete.
6. **Creating a Menu Item:** Send a POST request to `/menu-items` with the required details in the request body to create a new menu item.
7. **Getting All Menu Items:** Send a GET request to `/menu-items` to retrieve a list of all menu items.

Use the provided endpoints with appropriate HTTP methods and request parameters to interact with the Hotel Management API.

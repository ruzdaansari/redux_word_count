# Redux Counter

This is a simple counter application built using **React** and **Redux Toolkit**. It demonstrates the basics of state management in Redux by implementing a counter with increment, decrement, and toggle functionalities.

## Features
- **Increment & Decrement**: Increase or decrease the counter value.
- **Toggle Counter**: Show or hide the counter display.
- **Redux Toolkit**: Uses `createSlice` and `configureStore` for efficient state management.
- **React-Redux Hooks**: Implements `useSelector` and `useDispatch` for accessing state and dispatching actions.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ruzdaansari/redux_word_count.git
   ```
2. Navigate to the project directory:
   ```sh
   cd redux-counter
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the application:
   ```sh
   npm start
   ```

## Usage
- Click the **Increase** button to increment the counter.
- Click the **Decrease** button to decrement the counter.
- Click the **Toggle Counter** button to show or hide the counter value.

## Project Structure
```
redux-counter/
│-- src/
│   │-- store/
│   │   ├── index.js  # Redux store and slice configuration
│   │-- App.js        # Main application component
│   │-- index.js      # Entry point for the React app
│-- public/
│-- package.json
│-- README.md
```

## Technologies Used
- **React**
- **Redux Toolkit**
- **React-Redux**

## License
This project is open-source and available under the [MIT License](LICENSE).


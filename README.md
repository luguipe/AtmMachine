# ATM Machine

This project simulates an ATM machine where users can make deposits or withdrawals. It consists of two main components: `ATMDeposit` and `Account`.

## ATMDeposit Component

The `ATMDeposit` component is responsible for displaying the deposit or cashback form based on the selected mode. It takes three props:

* `onChange`: a function to handle input changes.
* `isDeposit`: a boolean indicating whether the transaction is a deposit or cashback.
* `isValid`: a boolean indicating whether the transaction amount is valid.

## Account Component

The `Account` component manages the state of the ATM machine. It tracks the total account balance, the current transaction amount, the transaction mode (deposit or cashback), and whether the transaction is valid. It provides a form for users to select the transaction mode and enter the amount.

### Features

* Select deposit or cashback mode.
* Enter the transaction amount.
* Submit the transaction.

### Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open [http://localhost:3000]() to view it in the browser.

### Technologies Used

* React
* JavaScript
*AtmMachine 
 
 

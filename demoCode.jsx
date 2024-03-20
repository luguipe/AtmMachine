const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Account = () => {
    // let deposit = 0; // state of this transaction
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(Number(event.target.value));
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
      }
      if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Deposit') {
        setIsDeposit(true);
      } else {
        setIsDeposit(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <>
          <h2 id="total">{status}</h2>
          <label>Select an action below to continue</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">
              Deposit
            </option>
            <option id="cashback-selection" value="Cash Back">
              Cash Back
            </option>
          </select>
          {atmMode && (
            <ATMDeposit
              onChange={handleChange}
              isDeposit={isDeposit}
              isValid={validTransaction}
            ></ATMDeposit>
          )}
        </>
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  
// //const { Button } = require("bootstrap");

// const ATMDeposit = ({onChange, isDeposit}) => {
//     const choice = ['Deposit', 'Withdraw'];
//     return(
//         <label className="label huge">
//             <h3> {choice[Number(!isDeposit)]}</h3> 
//             <input type="number" onChange={onChange}></input>
//             <input type="submit" value="Submit"></input>
//         </label>
//     );
// };

// const Account = () => {
    
//     let transactionState = 0; // store the value entered in the input field
//     let deposit = 0; // store the value entered in the input field
//     const [totalState, setTotalState] = React.useState(0); // store the total amount in the account]
//     const [isDeposit, setIsDeposit] = React.useState(true); // set transaction type - deposit default
    
//     let status = `Account Balance $${totalState}`;

//     console.log(`Account Rendered`);

//     const handleChange = e => {
//         console.log(`handleChange ${e.target.value}`);
//         transactionState = Number(e.target.value);
//         deposit = Number(e.target.value)
//     };

//     const handleSubmit = (e) => {
//         let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        
//         // Access the deposited amount from the input field
//         if(deposit < totalState){
//             alert(`Insufficient funds`);
           
//         }else{
//             alert(`Account balance is ${newTotal}`);
//             setTotalState( newTotal);
//         }
                
//         e.preventDefault();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2 id="total">{status}</h2>

//             <button onClick={()=>setIsDeposit(true)}>Deposit</button>
//             <button onClick={()=>setIsDeposit(false)}>Withdraw</button>
//             <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit </ATMDeposit>
//         </form>
//     );
// }

// ReactDOM.render(<Account />, document.getElementById('root'));
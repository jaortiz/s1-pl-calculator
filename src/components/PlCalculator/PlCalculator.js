import React from "react";

class Test extends React.Component {
  render() {
    return <h1>test</h1>;
  }
}

class PlCalculator extends React.Component {
  state = { amount: 0, loanTerm: 2, creditWorthy: "excellent" };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    alert("I submitted");
  };

  render() {
    const { amount, loanTerm, creditWorthy } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:{" "}
            <input
              name="amount"
              type="test"
              value={amount}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Loan Term:{" "}
            <select
              name="loanTerm"
              value={loanTerm}
              onChange={this.handleInputChange}
            >
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
            </select>
          </label>
          <label>
            Credit Worthiness:{" "}
            <select
              name="creditWorthy"
              value={creditWorthy}
              onChange={this.handleInputChange}
            >
              <option value="excellent">Excellent</option>
              <option value="very-good">Very Good</option>
              <option value="good">Good</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{amount}</p>
        <p>{loanTerm}</p>
        <p>{creditWorthy}</p>
        <Test />
      </div>
    );
  }
}

export default PlCalculator;

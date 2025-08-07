
export default function PaymentResponse() {
  return (
    <div className="payment-response">
     <div className="card">
  <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success Icon" />
  <h1>Payment Successful!</h1>
  <p>Your payment has been completed successfully. Below are your transaction details.</p>
  <div className="buttons">
    <button className="btn btn-download">⬇️ Download Invoice</button>
    <button className="btn btn-home">🏠 Go to Home</button>
  </div>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Total</th>
        <th>Tax</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Item">Product A</td>
        <td data-label="Qty">2</td>
        <td data-label="Price">$50</td>
        <td data-label="Total">$100</td>
        <td data-label="Tax">$10</td>
        <td data-label="Status">Paid</td>
      </tr>
      <tr>
        <td data-label="Item">Product B</td>
        <td data-label="Qty">1</td>
        <td data-label="Price">$80</td>
        <td data-label="Total">$80</td>
        <td data-label="Tax">$8</td>
        <td data-label="Status">Paid</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

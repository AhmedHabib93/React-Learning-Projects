import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer);
  console.log(customer);
  const customerName = customer.fullName;

  return <h2>👋 Welcome, {customerName}</h2>;
}

export default Customer;

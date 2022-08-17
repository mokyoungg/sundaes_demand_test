import { useState } from "react";
import { Container } from "react-bootstrap";
import OrderEntry from "./page/entry/OrderEntry";
import OrderConfirmation from "./page/confirmation/OrderConfirmation";
import OrderSummary from "./page/summary/OrderSummary";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  // orderPhase need to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  // return (
  //   <Container style={{ display: "flex" }}>
  //     <OrderDetailsProvider>
  //       {/* Summary page and entry page need provider */}
  //       {/* <OrderEntry /> */}
  //     </OrderDetailsProvider>
  //     {/* confirmation page does not need provider */}
  //   </Container>
  // );
  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;

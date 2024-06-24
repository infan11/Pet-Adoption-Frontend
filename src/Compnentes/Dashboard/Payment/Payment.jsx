import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";




const Payment = () => {
    const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-4xl font-bold mb-32">Payment method </h1>
            <div>
                <Elements stripe={stripePromis}>
                   <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
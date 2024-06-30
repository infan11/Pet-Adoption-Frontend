import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UseDonateCartHook from "../../Hooks/UseDonateCartHook/UseDonateCartHook";
import UseAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import useAuth from "../../Hooks/Auth/useAuth";
import { Helmet } from "react-helmet";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const {user} = useAuth()
    const [clientSecret , setClientSecret] = useState("");
    const [transactionId , setTransactionId] = useState("");
    const [donateCart, refetch] = UseDonateCartHook();
    const totalDonate = donateCart.reduce((total, cart) => total + parseFloat(cart.donationAmount), 0);
    useEffect(() => {
      if(donateCart > 0){
        axiosSecure.post('/create-payment-intent' , {price : totalDonate})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
      }
    } ,[axiosSecure, totalDonate])
    const handleSubmit = async (event) => {
      
        event.preventDefault();
    
        if (!stripe || !elements) {
         
          return;
        }
    
       
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
      
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          toast.error("Payment Unsuccsessfull")
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          toast.success("Payment Successfull")
        }
  

      // confirm Payment
      const {paymentIntent , error: confirmError} =  await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card , 
            billing_details: {
                email: user?.email || "anonymous",
                name : user?.displayName || "anonymous"
            }
        }
      })
      if(confirmError){
        console.log("confirm error");
      }
      else {
        console.log('payment intent' , paymentIntent);
        if(paymentIntent.status === "succeeded"){
            console.log("transaction id" , paymentIntent.id);
            setTransactionId(paymentIntent.id)

            const payment = {
                email : user.email,
                donation : totalDonate,
                transactionId : paymentIntent.id,
                date : new Date(),
                donationCartIds: donateCart.map(cart => cart._id),
                status: "pending"

                
            }
         const res = await axiosSecure.post("/payments" , payment)
         console.log("payment history post" , res.data);
         refetch();
        }
      }
    };
    return (
        <div>
           <Helmet>
                
                <title>Dashboard | Payment </title>
                
            </Helmet>
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '30px',
              color: '#fff',
              '::placeholder': {
                color: '#ade7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn w-full text-white mt-4font-extrabold fromDivNavM" type="submit" disabled={!stripe }>
        Pay
      </button>
    </form>

        </div>
    );
};

export default CheckOutForm;
interface OrderDetail {
  title: string;
  quantity: number;
  price: number;
}

function placeOrder(data: OrderDetail) {
  const orderDetails: OrderDetail[] = [];
  return orderDetails.push(data);
}

function notifyUser() {
  return "Sorry, the order failed to process. Please try again";
}

async function executeOrder(data: OrderDetail) {
  try {
    const order = await placeOrder(data);
    if (!order) {
      throw new Error("Order not found");
    }
    console.log("Successfully created order");
  } catch (error) {
    console.log("Error placing order : ", error);
    notifyUser();
  }
}

const data: OrderDetail = {
  title: "Seblak Ayam Mantap",
  quantity: 2,
  price: 15000,
};

// executeOrder(data);
interface PaymentDetail {
  idProduct: string;
  amount: number;
  payment_method: "VA" | "Gopay" | "OVO";
}

class Payment {
  private payment: PaymentDetail;

  constructor(payment: PaymentDetail) {
    this.payment = payment;
  }

  async makePayment() {
    const detail: PaymentDetail = {
      idProduct: this.payment.idProduct,
      amount: this.payment.amount,
      payment_method: this.payment.payment_method,
    };
    return detail;
  }
  async processPayment() {
    try {
      const response = await this.makePayment();
      console.log("Payment successful ", response);
    } catch (error: any) {
      if (error.code === "NETWORK_ERROR") {
        console.log("Network issue, retrying payment ...");
      } else {
        console.log("Payment failed. Please try again later");
      }
    }
  }
}

const paymentDetail: PaymentDetail = {
  idProduct: "1",
  amount: 50000,
  payment_method: "Gopay",
};

const payment = new Payment(paymentDetail);
payment.processPayment();

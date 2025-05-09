import React from 'react';
import Cart from '../components/Cart'; // ✔ تأكدنا من المسار وما زدناش .jsx لأنه غير ضروري

const CartPage = () => {
  return (
    <div className="container py-5">
      <Cart />
    </div>
  );
};

export default CartPage;

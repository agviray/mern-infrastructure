import { checkToken } from '../../utilities/users-service';

const OrderHistoryPage = () => {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <section>
      <div>
        <h1>Order History Page</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </div>
    </section>
  );
};

export default OrderHistoryPage;

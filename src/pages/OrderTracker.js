import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Container from 'react-bootstrap/Container';
import UnfulfilledOrderCard from '../components/UnfulfilledOrderCard';
import { BASE_API_URL } from '../api/Client';

/**
 * Page with list of people with unfulfilled orders
 */
function OrderTracker() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(BASE_API_URL);
    socket.on('person', (data) => {
      eventHandler(data);
    });

    const eventHandler = (personData) => {
      setOrdersList((currentOrders) => [...currentOrders, personData]);
    };

    return () => {
      console.log('effect done');
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function personFulfilled(id) {
    const socket = socketIOClient(BASE_API_URL);
    console.log('printing socket object: ');
    console.log(socket);

    console.log('emitting personfulfilled');
    socket.emit('personFulfilled', id);
    socket.on('personFulfillSuccess', function (confirmation) {
      console.log('confirmed ' + confirmation);
      socket.disconnect();
    });
    // Remove fulfilled order from list after emitting fulfillment through socket
    setOrdersList(ordersList.filter((order) => order._id !== id));
  }

  return (
    <Container>
      {ordersList.length === 0 && <p>No orders at the moment.</p>}
      {ordersList &&
        ordersList.map((order) => (
          <UnfulfilledOrderCard
            fulfillPerson={personFulfilled}
            person={order}
            key={order._id}
          />
        ))}
    </Container>
  );
}

export default OrderTracker;

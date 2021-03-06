import React, { useState } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

/**
 * Allows user to select how much of a stock item to request
 */
function OrderModal({
  show,
  handleClose,
  getStock,
  stockId,
  stockName,
  stockCount,
  onRequest,
}) {
  // Currently requested amount
  const [selectedAmount, setSelectedAmount] = useState(1);

  function handleDecrease() {
    if (selectedAmount > 1) setSelectedAmount(selectedAmount - 1);
  }

  function handleIncrease() {
    if (selectedAmount < stockCount) setSelectedAmount(selectedAmount + 1);
  }

  function submitRequest() {
    const requestedItem = {
      id: stockId,
      name: stockName,
      requestedCount: selectedAmount,
      countAfterRequest: stockCount - selectedAmount,
    };
    console.log("submitRequest -> stockCount", stockCount)
    console.log("submitRequest -> selectedAmount", selectedAmount)
    
    console.log("countAfterRequest ->", requestedItem.countAfterRequest);

    onRequest(requestedItem);
    handleClose();
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select requested amount for: {stockName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Current amount: <b>{stockCount}</b>
        </p>
        <p>
          Amount after order: <b>{stockCount - selectedAmount}</b>
        </p>
        <ButtonGroup
          aria-label="Stock item request buttons"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Button size="lg" 
          style={{backgroundColor: '#16AB8D', borderColor: '#FFFFFF', color: '#FFFFFF'}}
          onClick={handleDecrease}>
            -
          </Button>
          <Button size="lg" variant="secondary" style={{borderColor: '#FFFFFF'}} disabled>
            {selectedAmount}
          </Button>
          <Button size="lg"
          style={{backgroundColor: '#2EFFD5', borderColor: '#FFFFFF', color: '#FFFFFF'}}
          onClick={handleIncrease}>
            +
          </Button>
        </ButtonGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" style={{borderRadius: '200px'}} onClick={handleClose}>
          Close
        </Button>
        <Button onClick={submitRequest}
        style={{backgroundColor: '#35E82A', borderColor: '#35E82A', borderRadius: '200px', color: '#FFFFFF'}}>
          Request amount
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;

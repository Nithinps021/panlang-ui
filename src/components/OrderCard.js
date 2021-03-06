import React, { useState, useEffect } from 'react';
import { Button, Badge, Container, Card } from 'react-bootstrap';
import OrderModal from './OrderModal';

/**
 * Stock item card on order screen
 */
function OrderCard({
  stockItem,
  getStock,
  lang = 'name',
  onRequest,
  isRequested = false,
}) {
  const [showOrderModal, setShowAmountModal] = useState(false);
  const [hasLanguage, setHasLanguage] = useState(false);

  // Handlers for showing/closing modal when ordering item
  const handleClose = () => setShowAmountModal(false);
  const handleShow = () => setShowAmountModal(true);

  // Determine whether this stock item has a name in the specified language
  useEffect(() => {
    setHasLanguage(stockItem[lang] !== undefined);
  }, [lang, stockItem]);

  function getRequestButtonText() {
    if (stockItem.count <= 0) {
      return 'Out of stock';
    } else if (isRequested) {
      return 'Edit requested amount';
    } else {
      return 'Request item';
    }
  }

  return (
    <>
      <Card style={{ margin: 5 }}>
        <Card.Body>
          <Card.Header as="h2">
            {hasLanguage ? stockItem[lang] : stockItem.name}
            {lang !== 'name' && hasLanguage
              ? ' (' + stockItem['name'] + ')'
              : ''}
          </Card.Header>

          <Card.Text>
            Amount:{' '}
            <font style={{ fontSize: '1.4em', fontWeight: 'bolder' }}>
              {stockItem.count}
            </font>
          </Card.Text>
          <Container
            style={{ display: 'flex', alignItems: 'center', padding: 0 }}
          >
            {!hasLanguage && (
              <Badge variant="danger">Language unavailable: {lang}</Badge>
            )}
            <div style={{ margin: 'left' }} />
            <Button
              size="lg"
              style={{alignSelf: 'left', backgroundColor: '#16AB8D', borderColor: '#FFFFF5', color: '#FFFFFF', borderRadius: '200px'}}
              onClick={handleShow}
              disabled={stockItem.count <= 0}
            >
              {getRequestButtonText()}
            </Button>
          </Container>
          <Card.Text style={{ textAlign: 'right' }}>
            Last updated:{' '}
            {stockItem.timestamp !== undefined
              ? new Date(stockItem.timestamp).toDateString()
              : 'Unavailable'}
          </Card.Text>
        </Card.Body>
      </Card>

      <OrderModal
        show={showOrderModal}
        handleClose={handleClose}
        getStock={getStock}
        stockName={stockItem.name}
        stockId={stockItem._id}
        stockCount={stockItem.count}
        onRequest={onRequest}
      />
    </>
  );
}

export default OrderCard;

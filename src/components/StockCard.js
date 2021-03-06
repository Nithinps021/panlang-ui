import React, { useEffect, useState } from 'react';
import { Button, Badge, Container, Card } from 'react-bootstrap';
import StockModal from './StockModal';
import ErrorAlert from './ErrorAlert';

function StockCard({ stockItem, getStock, lang = 'name' }) {
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [hasLanguage, setHasLanguage] = useState(false);

  // Handlers for showing/closing modal when editing item amount
  const handleClose = () => setShowAmountModal(false);
  const handleShow = () => setShowAmountModal(true);

  // Determine whether this stock item has a name in the specified language
  useEffect(() => {
    setHasLanguage(stockItem[lang] !== undefined);
  }, [lang, stockItem]);

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

          <Card.Text style={{ textAlign: 'right' }}>
            Last updated:{' '}
            {stockItem.timestamp !== undefined
              ? new Date(stockItem.timestamp).toDateString()
              : 'Unavailable'}
          </Card.Text>

          <Container
            style={{ display: 'flex', alignItems: 'center', padding: 0 }}
          >
            {!hasLanguage && (
              <Badge variant="danger">Language unavailable: {lang}</Badge>
            )}
            <div style={{ margin: 'auto' }} />
            <Button
              size="sm"
              style={{alignSelf: 'center', backgroundColor: '#16AB8D', borderColor: '#FFFFF5', color: '#FFFFFF', borderRadius: '200px'}}
              onClick={handleShow}
            >
              Edit amount
            </Button>
          </Container>

          {stockItem.count <= 0 && <ErrorAlert body="Warning: Out of stock" />}
        </Card.Body>
      </Card>

      <StockModal
        show={showAmountModal}
        handleClose={handleClose}
        getStock={getStock}
        stockName={hasLanguage ? stockItem[lang] : stockItem.name}
        stockId={stockItem._id}
        stockCount={stockItem.count}
      />
    </>
  );
}

export default StockCard;

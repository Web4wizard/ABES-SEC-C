function FoodCard() {
  const items = [
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1601924582971-b7a59e3e8b3c', price: '₹299' },
    { name: 'Pasta', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e', price: '₹199' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '20px'
    }}>
      {items.map((item, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          width: '200px',
          textAlign: 'center',
          padding: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
        }}>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: '100%', borderRadius: '10px', height: '150px', objectFit: 'cover' }}
          />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;

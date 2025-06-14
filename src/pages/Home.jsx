export default function Home() {
    return <div className="p-4">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
      <button className="Pill-label">
          Bookings
      </button>
      <button className="Book-button">
          Book here
      </button>
      </div>
      
    </div>;
  }
import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Basic Resin Keychain",
    price: 189,
    description: "Simple, elegant resin keychain perfect for daily use.",
    image: "https://images.unsplash.com/photo-1617037092990-df3a1cbf4d6f",
  },
  {
    id: 2,
    name: "Designer Keychain",
    price: 299,
    description: "Add sparkle with glitter and embedded charms.",
    image: "https://images.unsplash.com/photo-1626118294031-05cc45c7a69e",
  },
  {
    id: 3,
    name: "Custom Name Keychain",
    price: 249,
    description: "Personalize it with your name or initials.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013",
  },
  {
    id: 4,
    name: "Gift Combo Set",
    price: 399,
    description: "Includes custom keychain and small resin charm gift box.",
    image: "https://images.unsplash.com/photo-1631865418421-9e6b65f45eae",
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [customText, setCustomText] = useState("");

  const handleWhatsApp = (product) => {
    const message = `Hi! I want to order the "${product.name}" for ₹${product.price}. Custom text: ${customText}`;
    const url = `https://wa.me/918792810233?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">IG</div>
        <h1>Ivy Glitzz</h1>
        <button
          className="whatsapp-btn"
          onClick={() =>
            window.open("https://wa.me/918792810233", "_blank")
          }
        >
          Chat on WhatsApp
        </button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Custom Resin Keychains — Handcrafted with Love</h2>
          <p>Unique, shiny, and personalized gifts made in Bangalore 💖</p>
          <button className="primary-btn">Shop Now</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1606813907291-01a1b4828d2d"
          alt="Resin keychains"
          className="hero-img"
        />
      </section>

      <section className="products">
        <h3>Our Keychains</h3>
        <div className="grid">
          {products.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <span className="price">₹{p.price}</span>
              <div className="buttons">
                <button onClick={() => setSelected(p)}>Customize</button>
                <button onClick={() => handleWhatsApp(p)}>Order</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <img src={selected.image} alt={selected.name} />
            <div className="details">
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <input
                type="text"
                placeholder="Enter custom name/text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
              />
              <div className="modal-btns">
                <button
                  onClick={() => handleWhatsApp(selected)}
                  className="primary-btn"
                >
                  Order via WhatsApp
                </button>
                <button onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer>
        © 2025 Ivy Glitzz • Handmade in Bangalore • 📞 8792810233
      </footer>
    </div>
  );
}

export default App;

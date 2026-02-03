import mens from "../assets/mens.jpg";
import womens from "../assets/womens.jpg";
import kids from "../assets/kids.jpg";
import casual from "../assets/casual.jpg";
import formal from "../assets/formal.jpg";
import knitwear from "../assets/knitwear.jpg";

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-container">

        <div className="products-header">
          <h2>Product Categories</h2>
          <p>
            We specialize in sourcing a wide range of garment categories,
            ensuring quality and style across all product lines for your brand.
          </p>
        </div>

        <div className="products-grid">
          <ProductCard
            image={mens}
            title="Men's Wear"
            text="T-Shirts, trousers, suits, and casual wear for the modern man"
          />

          <ProductCard
            image={womens}
            title="Women's Wear"
            text="Dresses, tops, skirts, and fashion-forward apparel"
          />

          <ProductCard
            image={kids}
            title="Kids Wear"
            text="Comfortable and stylish clothing for children of all ages"
          />

          <ProductCard
            image={casual}
            title="Casual Wear"
            text="Everyday comfort with style for all occasions"
          />

          <ProductCard
            image={formal}
            title="Formal Wear"
            text="Professional attire and elegant formal clothing"
          />

          <ProductCard
            image={knitwear}
            title="Knitwear & Woven"
            text="Quality knitwear and woven garments for all seasons"
          />
        </div>

      </div>
    </section>
  );
}

function ProductCard({ image, title, text }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-overlay">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

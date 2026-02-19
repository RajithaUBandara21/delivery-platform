import { useEffect, useState } from "react";
import  { getProducts } from "../api/products";
import type { Product } from "../types/Product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>ShopSphere</h1>
      <p style={{ marginBottom: 20, color: "#444" }}>
        Products loaded from API Gateway
      </p>

      <button
        onClick={load}
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        Refresh
      </button>

      {loading && <p>Loading products...</p>}

      {error && (
        <div
          style={{
            padding: 12,
            borderRadius: 10,
            background: "#ffe6e6",
            border: "1px solid #ffb3b3",
            marginBottom: 16,
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && <p>No products available.</p>}

      {!loading && !error && products.length > 0 && (
        <div style={{ display: "grid", gap: 12 }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                padding: 16,
                borderRadius: 12,
                border: "1px solid #eee",
                background: "white",
              }}
            >
              <h3 style={{ margin: 0 }}>{p.name}</h3>
              <p style={{ margin: "6px 0", color: "#444" }}>Price: Rs. {p.price}</p>
              <p style={{ margin: 0, color: p.inStock ? "green" : "red" }}>
                {p.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

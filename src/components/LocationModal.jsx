import React, { useState, useEffect } from "react";

const locations = [
  { name: "Alabama", min: 20 },
  { name: "Alaska", min: 30 },
  { name: "Arizona", min: 50 },
  { name: "California", min: 29 },
  { name: "Colorado", min: 80 },
  { name: "Florida", min: 90 },
  { name: "Georgia", min: 25 },
  { name: "Hawaii", min: 60 },
  { name: "Illinois", min: 35 },
  { name: "New York", min: 45 },
  { name: "Texas", min: 40 },
  { name: "Washington", min: 55 },
];

function LocationModal({ isOpen, onClose, onSelectLocation }) {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSelect = (locationName) => {
    onSelectLocation(locationName);
    handleClose();
  };

  const filtered = locations.filter((loc) =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        .loc-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1040;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .loc-backdrop.show { opacity: 1; visibility: visible; }
        .loc-modal {
          background: #fff;
          border-radius: 12px;
          width: 100%;
          max-width: 480px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          transform: translateY(30px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .loc-modal.show { transform: translateY(0); opacity: 1; }
        .loc-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .loc-item:hover { color: #0aad0a; }
        .loc-item:last-child { border-bottom: none; }
      `}</style>

      {/* Backdrop */}
      <div className={`loc-backdrop ${visible ? "show" : ""}`} onClick={handleClose} />

      {/* Centered wrapper */}
      <div
        style={{
          position: "fixed", inset: 0,
          zIndex: 1050,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div className={`loc-modal ${visible ? "show" : ""}`}>

          {/* Header */}
          <div className="p-4 pb-2">
            <div className="d-flex justify-content-between align-items-start mb-1">
              <h5 className="fw-bold mb-0">Choose your Delivery Location</h5>
              <button className="btn-close" onClick={handleClose} />
            </div>
            <p className="text-muted mb-3" style={{ fontSize: "0.85rem" }}>
              Enter your address and we will specify the offer you area.
            </p>

            {/* Search input */}
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  borderColor: "#0aad0a",
                  boxShadow: "0 0 0 1px #0aad0a",
                  paddingRight: "36px",
                }}
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="btn p-0"
                  style={{
                    position: "absolute", right: "10px", top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "16px", color: "#999", lineHeight: 1,
                  }}
                >×</button>
              )}
            </div>
          </div>

          {/* Location list */}
          <div className="px-4 pb-2" style={{ overflowY: "auto", flex: 1 }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="fw-semibold text-dark">Select Location</small>
              <button
                className="btn btn-sm btn-outline-secondary"
                style={{ fontSize: "0.75rem", padding: "2px 10px" }}
                onClick={() => setSearch("")}
              >
                Clear All
              </button>
            </div>

            {filtered.length === 0 ? (
              <p className="text-muted text-center py-3" style={{ fontSize: "0.875rem" }}>
                No locations found
              </p>
            ) : (
              filtered.map((loc) => (
                <div
                  key={loc.name}
                  className="loc-item"
                  onClick={() => handleSelect(loc.name)}
                >
                  <span>{loc.name}</span>
                  <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                    Min: ${loc.min}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationModal;
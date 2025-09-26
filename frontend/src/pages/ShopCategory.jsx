import React, { useContext, useState, useEffect, useRef } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import sort_icon from '../components/assets/sort_icon.png';
import filter_icon from '../components/assets/filter_icon.png';
import Item from '../components/item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const [sortMethod, setSortMethod] = useState("");
  const [filters, setFilters] = useState({ priceMax: 5000, discount: [], colors: [] });

  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [tempSort, setTempSort] = useState(sortMethod);
  const [tempFilters, setTempFilters] = useState({ ...filters });

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const sortRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
      if (filterRef.current && !filterRef.current.contains(e.target)) setFilterOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyFilters = () => {
    setFilters({ ...tempFilters });
    setSortMethod(tempSort);
    setSortOpen(false);
    setFilterOpen(false);
    setVisibleCount(12);
  };

  const filteredProducts = all_product
    .filter(p => p.category === category)
    .filter(p => p.new_price <= filters.priceMax)
    .filter(p => {
      if (!filters.discount.length) return true;
      const discountPercent = Math.round(((p.old_price - p.new_price)/p.old_price)*100);
      return filters.discount.some(d => discountPercent >= d);
    })
    .filter(p => {
      if (!filters.colors.length) return true;
      return filters.colors.includes(p.color);
    });

  const sortedProducts = [...filteredProducts].sort((a,b) => {
    switch(sortMethod){
      case "lowToHigh": return a.new_price - b.new_price;
      case "highToLow": return b.new_price - a.new_price;
      case "newest": return b.id - a.id;
      case "bestSelling": return b.sold - a.sold;
      default: return 0;
    }
  });

  const displayedProducts = sortedProducts.slice(0, visibleCount);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt='' />

      <div className='shopcategory-controls'>
        <div className="dropdown" ref={sortRef}>
          <button onClick={() => setSortOpen(!sortOpen)}>
            <img src={sort_icon} alt="sort" />
          </button>
          {sortOpen && (
            <div className="dropdown-menu">
              <button onClick={() => setTempSort("lowToHigh")}>Price: Low to High</button>
              <button onClick={() => setTempSort("highToLow")}>Price: High to Low</button>
              <button onClick={() => setTempSort("newest")}>Newest First</button>
              <button onClick={() => setTempSort("bestSelling")}>Best Selling</button>
              <button className="apply-btn" onClick={applyFilters}>Apply</button>
            </div>
          )}
        </div>

        <div className="dropdown" ref={filterRef}>
          <button onClick={() => setFilterOpen(!filterOpen)}>
            <img src={filter_icon} alt="filter" />
          </button>
          {filterOpen && (
            <div className="dropdown-menu filter-menu">
              <div className="filter-section">
                <h4>Price</h4>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={tempFilters.priceMax}
                  onChange={e => setTempFilters(prev => ({ ...prev, priceMax: Number(e.target.value) }))}
                />
                <p>Max ₹{tempFilters.priceMax}</p>
              </div>

              <div className="filter-section">
                <h4>Discount</h4>
                {[10,25,50].map(d => (
                  <label key={d}>
                    <input
                      type="checkbox"
                      checked={tempFilters.discount.includes(d)}
                      onChange={() => {
                        const discounts = tempFilters.discount.includes(d)
                          ? tempFilters.discount.filter(x=>x!==d)
                          : [...tempFilters.discount,d];
                        setTempFilters(prev => ({ ...prev, discount: discounts }));
                      }}
                    /> {d}% or more
                  </label>
                ))}
              </div>

              <div className="filter-section">
                <h4>Colors</h4>
                {["red","blue","black","white"].map(c => (
                  <span
                    key={c}
                    className={`color-circle ${c} ${tempFilters.colors.includes(c) ? "selected" : ""}`}
                    onClick={() => {
                      const colors = tempFilters.colors.includes(c)
                        ? tempFilters.colors.filter(x=>x!==c)
                        : [...tempFilters.colors,c];
                      setTempFilters(prev => ({ ...prev, colors }));
                    }}
                  ></span>
                ))}
              </div>

              <button className="apply-btn" onClick={applyFilters}>Apply</button>
            </div>
          )}
        </div>
      </div>

      <div className="shopcategory-products">
        {displayedProducts.length ? (
          displayedProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="no-results">No products match the selected filters.</p>
        )}
      </div>

      {visibleCount < sortedProducts.length && (
        <div className="shopcategory-loadmore">
          <button onClick={() => setVisibleCount(prev => prev + 12)}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;

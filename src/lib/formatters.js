/**
 * Formatter Functions
 * Functions for formatting display values (prices, numbers, etc.)
 */

/**
 * Format number as USD currency
 * 
 * @param {number} amount - Amount to format
 * @param {boolean} showCents - Whether to show cents (default: false)
 * @returns {string} Formatted currency string
 * 
 * @example
 * formatPrice(425000) // "$425,000"
 * formatPrice(425000.50, true) // "$425,000.50"
 */
export function formatPrice(amount, showCents = false) {
  if (amount === null || amount === undefined) return "N/A";
  
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  };
  
  return new Intl.NumberFormat("en-US", options).format(amount);
}

/**
 * Format number with commas
 * 
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 * 
 * @example
 * formatNumber(2450) // "2,450"
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return "N/A";
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Format square footage
 * 
 * @param {number} sqft - Square footage
 * @returns {string} Formatted string with "sq ft"
 * 
 * @example
 * formatSqft(2450) // "2,450 sq ft"
 */
export function formatSqft(sqft) {
  if (!sqft) return "N/A";
  return `${formatNumber(sqft)} sq ft`;
}

/**
 * Format lot size
 * 
 * @param {number} lotSize - Lot size in sq ft
 * @returns {string} Formatted lot size
 * 
 * @example
 * formatLotSize(7500) // "7,500 sq ft lot"
 */
export function formatLotSize(lotSize) {
  if (!lotSize) return "N/A";
  return `${formatNumber(lotSize)} sq ft lot`;
}

/**
 * Format bedroom/bathroom count
 * 
 * @param {number} beds - Number of bedrooms
 * @param {number} baths - Number of bathrooms
 * @returns {string} Formatted string
 * 
 * @example
 * formatBedBath(4, 3.5) // "4 Bed | 3.5 Bath"
 */
export function formatBedBath(beds, baths) {
  const bedStr = beds ? `${beds} Bed` : "";
  const bathStr = baths ? `${baths} Bath` : "";
  
  return [bedStr, bathStr].filter(Boolean).join(" | ");
}

/**
 * Format full room configuration
 * 
 * @param {Object} config - Room configuration object
 * @param {number} config.beds - Bedrooms
 * @param {number} config.baths - Bathrooms
 * @param {number} config.garage - Garage spaces
 * @returns {string} Formatted string
 * 
 * @example
 * formatRoomConfig({ beds: 4, baths: 3, garage: 2 })
 * // "4 Bed | 3 Bath | 2 Car Garage"
 */
export function formatRoomConfig({ beds, baths, garage }) {
  const parts = [];
  
  if (beds) parts.push(`${beds} Bed`);
  if (baths) parts.push(`${baths} Bath`);
  if (garage) parts.push(`${garage} Car Garage`);
  
  return parts.join(" | ");
}

/**
 * Format phone number
 * 
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 * 
 * @example
 * formatPhone("5551234567") // "(555) 123-4567"
 */
export function formatPhone(phone) {
  if (!phone) return "";
  
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * Format address object to string
 * 
 * @param {Object} address - Address object
 * @returns {string} Formatted address
 */
export function formatAddress(address) {
  if (!address) return "";
  
  const { street, city, state, zip } = address;
  const parts = [];
  
  if (street) parts.push(street);
  if (city && state) {
    parts.push(`${city}, ${state}${zip ? ` ${zip}` : ""}`);
  }
  
  return parts.join(", ");
}

/**
 * Format price range
 * 
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 * @returns {string} Formatted price range
 * 
 * @example
 * formatPriceRange(300000, 500000) // "$300,000 - $500,000"
 */
export function formatPriceRange(min, max) {
  if (!min && !max) return "Price TBD";
  if (!max) return `From ${formatPrice(min)}`;
  if (!min) return `Up to ${formatPrice(max)}`;
  return `${formatPrice(min)} - ${formatPrice(max)}`;
}

/**
 * Get price breakdown summary
 * 
 * @param {Object} breakdown - Price breakdown object
 * @returns {Array} Array of label/value pairs
 */
export function getPriceBreakdownItems(breakdown) {
  const items = [];
  
  if (breakdown.basePrice) {
    items.push({
      label: "Base Price",
      value: formatPrice(breakdown.basePrice),
    });
  }
  
  if (breakdown.optionsTotal > 0) {
    items.push({
      label: "Upgrade Options",
      value: `+${formatPrice(breakdown.optionsTotal)}`,
    });
  }
  
  if (breakdown.packagePrice > 0) {
    items.push({
      label: breakdown.packageName || "Upgrade Package",
      value: `+${formatPrice(breakdown.packagePrice)}`,
    });
  }
  
  return items;
}

/**
 * Format relative time (e.g., "2 days ago")
 * 
 * @param {Date|string} date - Date to format
 * @returns {string} Relative time string
 */
export function formatRelativeTime(date) {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now - then) / 1000);
  
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  
  return "Just now";
}

/**
 * Format price per square foot
 * 
 * @param {number} price - Price in dollars
 * @param {number} sqft - Square footage
 * @returns {string} Formatted string
 * 
 * @example
 * formatPricePerSqft(385000, 2156) // "$178.57"
 */
export function formatPricePerSqft(price, sqft) {
  if (!sqft || !price) return "N/A";
  const pricePerSqft = price / sqft;
  return `$${pricePerSqft.toFixed(2)}`;
}
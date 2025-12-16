/**
 * Utility Functions
 * Common helper functions used throughout the application
 */

import { clsx } from "clsx";

/**
 * Merge class names conditionally
 * Combines clsx for conditional classes
 * 
 * @param {...string} inputs - Class names to merge
 * @returns {string} Merged class string
 * 
 * @example
 * cn("base-class", isActive && "active", className)
 */
export function cn(...inputs) {
  return clsx(inputs);
}

/**
 * Generate a URL-friendly slug from a string
 * 
 * @param {string} str - String to convert
 * @returns {string} URL-friendly slug
 * 
 * @example
 * slugify("The Aspen Plan") // "the-aspen-plan"
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Capitalize first letter of each word
 * 
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 * 
 * @example
 * capitalize("hello world") // "Hello World"
 */
export function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Truncate text to a specified length
 * 
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add (default: "...")
 * @returns {string} Truncated string
 * 
 * @example
 * truncate("Long description here", 10) // "Long descr..."
 */
export function truncate(str, length, suffix = "...") {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + suffix;
}

/**
 * Debounce function execution
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if code is running on client side
 * 
 * @returns {boolean} True if running in browser
 */
export function isClient() {
  return typeof window !== "undefined";
}

/**
 * Generate unique ID
 * 
 * @param {string} prefix - Optional prefix
 * @returns {string} Unique ID
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Deep clone an object
 * 
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if object is empty
 * 
 * @param {Object} obj - Object to check
 * @returns {boolean} True if empty
 */
export function isEmpty(obj) {
  if (!obj) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === "object") return Object.keys(obj).length === 0;
  return false;
}

/**
 * Get nested object value safely
 * 
 * @param {Object} obj - Source object
 * @param {string} path - Dot notation path
 * @param {*} defaultValue - Default value if path not found
 * @returns {*} Value at path or default
 * 
 * @example
 * getNestedValue({ a: { b: 1 } }, "a.b") // 1
 */
export function getNestedValue(obj, path, defaultValue = undefined) {
  const keys = path.split(".");
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result !== undefined ? result : defaultValue;
}

/**
 * Sort array of objects by key
 * 
 * @param {Array} arr - Array to sort
 * @param {string} key - Key to sort by
 * @param {string} order - "asc" or "desc"
 * @returns {Array} Sorted array
 */
export function sortByKey(arr, key, order = "asc") {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}

/**
 * Filter array by search term across multiple keys
 * 
 * @param {Array} arr - Array to filter
 * @param {string} searchTerm - Search term
 * @param {Array} keys - Keys to search in
 * @returns {Array} Filtered array
 */
export function filterBySearch(arr, searchTerm, keys) {
  if (!searchTerm) return arr;
  
  const term = searchTerm.toLowerCase();
  
  return arr.filter((item) =>
    keys.some((key) => {
      const value = getNestedValue(item, key);
      return value && String(value).toLowerCase().includes(term);
    })
  );
}
/**
 * Combines multiple class names into a single string, filtering out falsy values
 * @param {...string} classes - Class names to combine
 * @returns {string} Combined class string
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Formats a date according to the specified format
 * @param {Date} date - Date to format
 * @param {string} format - Format string (default: 'MMMM d, yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, format = 'MMMM d, yyyy') => {
  if (!date) return '';
  
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Simple formatting implementation
  return format
    .replace('yyyy', year)
    .replace('MMMM', months[month])
    .replace('MMM', months[month].substring(0, 3))
    .replace('MM', String(month + 1).padStart(2, '0'))
    .replace('M', month + 1)
    .replace('dd', String(day).padStart(2, '0'))
    .replace('d', day);
};

/**
 * Formats currency values
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Truncates text to a specific length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}; 
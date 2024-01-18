// Import React library
import React from 'react';



// Define IconButton component
const IconButton = ({ icon, altText, classtype, onClick }) => {
  // Return JSX for the component
  return (
    <button className={classtype} onClick={onClick} >
      <img src={icon} alt={altText} />
    </button>
  );
};

// Export IconButton component wrapped with React.memo
export default React.memo(IconButton); 
// Wrapping the component with React.memo improves performance by memoizing the component, preventing unnecessary re-renders.
import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=face"
      }}
      {...props}
    />
  );
}

export default Image;

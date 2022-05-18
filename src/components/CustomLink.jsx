import React from "react";
import { Link, useMatch } from "react-router-dom";

export function CustomLink({to, children, ...props}) {
  const match = useMatch(to)
    return (
    <Link style={{color: match ? 'red' : 'gray'}} className='home' to={to} {...props}>
        {children}
    </Link>
  );
}
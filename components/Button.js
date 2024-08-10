'use client';

import PropTypes from 'prop-types';
import React from 'react';

function ClientButton({ children, onClick, variant }) {
    const baseClasses = "transition-colors duration-300";
    const filledClasses = "btn-gradient-fill";
    const outlinedClasses = "btn-gradient-border";

    const buttonClasses = variant === "filled" ? filledClasses : outlinedClasses;

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${buttonClasses}`}
        >
            <span className={"px-8"}>
                       {children}
            </span>

        </button>
    );
}

ClientButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['filled', 'outlined']).isRequired,
};

export default ClientButton;

import React, { Fragment } from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  const stylePrimary = css`
    color: white;
    background-color: #1ea7fd;
  `;

  const styleSecondary = css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `;

  const styleSmall = css`
    font-size: 12px;
    padding: 10px 16px;
    .storybook-button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `;

  const styleMediam = css`
    font-size: 14px;
    padding: 11px 20px;
  `;

  const styleLarge = css`
    font-size: 16px;
    padding: 12px 24px;
  `;

  const styleButton = css`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${primary ? stylePrimary : styleSecondary}
    ${size === 'small' && styleSmall}
    ${size === 'medium' && styleMediam}
    ${size === 'large' && styleLarge}
  `;

  return (
    <div>
      <button
        type="button"
        css={styleButton}
        className={['storybook-button', `storybook-button--${size}`, mode].join(
          ' '
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

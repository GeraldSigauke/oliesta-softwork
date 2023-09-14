import React from 'react';

const FooterProduct = ({ footerProduct }) => {
  return (
    <>
        <p class="mb-4">
        <a href={ footerProduct.url } class="text-white dark:text-white">
            { footerProduct.product }
        </a>
        </p>
    </>
  )
}

export default FooterProduct
import React from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';

import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <Image
        src="https://imagenes.elpais.com/resizer/h6Q3Cb9fH8uXM_Fw-r7rionLXVM=/980x980/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZXHWLZPS4AJUEXDFDGRTCN3RMQ.jpg"
        alt="bike"
        width="100%"
        height="100%"
      />
      <div className={styles.ProductInfo}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className={(styles['primary-button'], styles['add-to-cart-button'])}>
          <Image src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;

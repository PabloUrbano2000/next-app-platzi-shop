/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image
        src={'https://imagenes.elpais.com/resizer/h6Q3Cb9fH8uXM_Fw-r7rionLXVM=/980x980/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZXHWLZPS4AJUEXDFDGRTCN3RMQ.jpg'}
        alt={product.title}
        width={240}
        height={240}
        layout="responsive"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <div className={styles['more-clickable-area']} role="button" onClick={() => handleClick(product)} tabIndex="0">
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} alt="added to cart" />
          ) : (
            <Image className={(styles['pointer'], styles['add-to-cart-btn'])} src={addToCartImage} alt="add to cart" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

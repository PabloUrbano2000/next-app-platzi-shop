import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          src={'https://imagenes.elpais.com/resizer/h6Q3Cb9fH8uXM_Fw-r7rionLXVM=/980x980/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZXHWLZPS4AJUEXDFDGRTCN3RMQ.jpg'}
          alt={product?.title}
          width="100%"
          height="100%"
        />
      </figure>
      <p>{product?.title || ''}</p>
      <p>${product?.price || ''}</p>
      <Image className="pointer more-clickable-area" src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;

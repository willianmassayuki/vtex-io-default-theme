import React, { useState, useEffect } from 'react';
import styles from './styles';
import Loading from './component/Loading';
import { useProduct } from 'vtex.product-context';
import { useQuery } from 'react-apollo';
import GET_PRODUCT_AVAILABILITY from '../../graphql/productAvailability.gql';

function AvailableQuantity() {
  const productContextValue = useProduct();
  const [quantity, setQuantity] = useState(null);

  // Executa a query para buscar disponibilidade do produto
  const { data, loading, error } = useQuery(GET_PRODUCT_AVAILABILITY, {
    variables: { productId: productContextValue?.product?.productId },
    skip: !productContextValue?.product?.productId  // Evita query quando productId não estiver definido
  });

  useEffect(() => {
    if (data?.product?.items?.[0]?.sellers?.[0]?.commertialOffer?.AvailableQuantity !== undefined) {
      setQuantity(data.product.items[0].sellers[0].commertialOffer.AvailableQuantity);
    }
  }, [data]);

  // Renderiza normalmente, mesmo que a query tenha erro
  return (
    <div className={`${styles['t-AvailableQuantity-wrapper']}`}>
      {loading && <Loading />} {/* Exibe o loading enquanto carrega */}

      {!loading && !error && quantity !== null && ( // Se não houver erro e a quantidade for válida
        <p>Apenas: <b>{quantity} UNID.</b></p>
      )}

      {!loading && error && ( // Se houver erro na query
        <p></p>
      )}
    </div>
  );
}

export default AvailableQuantity;

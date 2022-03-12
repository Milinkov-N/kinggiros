import Link from 'next/link'
import { IShopifyProduct } from 'src/models/shopify'

import LogoImg from 'public/logo_2022.png'
import Button from '../Button'
import Img from '../Img'

import styles from './Product.module.css'

export interface ProductProps {
  product: IShopifyProduct
}

export default function Product({ product }: ProductProps) {
  const price = Math.floor(+product.priceRange.minVariantPrice.amount)

  return (
    <div className={ styles.product }>
      <Link href={ `/products/${ product.handle }` }>
        <a className={ styles.link }>
          <Img
            priority
            src={ `${ product.images.edges[0].node.transformedSrc || LogoImg.src }` }
            alt={ product.title }
            size={ '100%' }
            layout='fill'
            objectFit='contain' 
          />
          <div className={ styles.header }>
            <h3 className={ styles.title }>
              <span>{ product.title }</span>
              {/* { setTags(product.tags).map(item => item) } */}
            </h3>
          </div>
        </a>
      </Link>
      <p className={ styles.description }>
        { product.description }
      </p>
      <div className={ styles.footer }>
        <p className="product-price">{ `${ price } RUB` }</p>
        <Button
          variant='primary'
          label='В корзину'
          onClick={ () => console.log('TODO: handleAddToCart') }
        />
      </div>
    </div>
  )
}
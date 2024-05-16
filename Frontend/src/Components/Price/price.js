import React from 'react'


export default function price({price,locale,currency}) {
  const formatPrice=()=>
    new Intl.NumberFormat(locale,{
      style: 'currency',
      currency: currency
    }).format(price)
 
  return (
    <span> {formatPrice()}</span>
  )
}

price.defaultProps = {
    locale: 'es-US',
    currency: 'USD'
    };
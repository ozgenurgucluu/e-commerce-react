import React from 'react'

const ProductDetail = () => {
    const [productDetail,setProductDetail]=useState([]);
    const getProductDetail=()=>{
        axios.get('').then((response)=>{
            setProductDetail(response.data)
        })
    }
  return (
    <div>
      Product Detail
    </div>
  )
}

export default ProductDetail

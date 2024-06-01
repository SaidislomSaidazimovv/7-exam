import React from 'react'
import { getData } from "@/fetch"
import Detail from '@/components/detail/Detail'
import Link from 'next/link'
import "./dtl.scss"

const Single = async ({params: {id}}) => {
  let data = await getData(`products/${id}`)
  return (
    <div>
      <div className="single__nav_link">
        <Link className="single__nav_link" href={"/"}>
          Home
        </Link>
        <span className="single__nav_span">/</span>
        <Link className="single__nav_link" href={"/"}>
          Hot Deal
        </Link>
        <span className="single__nav_span">/</span>
        <span className="single__nav_text">Nike Airmax 270 React</span>
      </div>
        <Detail data={data}/>
    </div>
  )
}

export default Single
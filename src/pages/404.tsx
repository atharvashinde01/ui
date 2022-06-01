import React from "react"
import Empty from "../components/global/empty"
// @ts-ignore
import EmptyImg from "../../static/empty3.png"

export default function NotFound() {
  return (
    <Empty doc={"https://docs.keploy.io/"} message={"Whops! This is not the page you're looking for. "} image={EmptyImg}/>
  )
}

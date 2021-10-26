import React from "react"

export const IcterineLinkButton: React.FunctionComponent<{
  className?: string
}> = ({ children, className }) => {
  return (
    <span
      className={`inline-block px-5 py-2 font-mono font-bold text-black uppercase cursor-pointer bg-icterine hover:bg-iris hover:text-white  ${
        className || ""
      }`}
    >
      {children}
    </span>
  )
}

export const IrisLinkButton: React.FunctionComponent<{
  className?: string
}> = ({ children, className }) => {
  return (
    <span
      className={`flex-wrap inline-block px-5 py-2 font-mono font-bold text-white uppercase border cursor-pointer border-iris bg-iris hover:bg-icterine hover:text-black ${
        className || ""
      }`}
    >
      {children}
    </span>
  )
}

export const TransparentLinkButton: React.FunctionComponent<{
  className?: string
}> = ({ children, className }) => {
  return (
    <span
      className={`inline-block px-5 py-2 font-mono font-bold uppercase border cursor-pointer bg-icterine border-icterine hover:bg-transparent hover:text-white ${
        className || ""
      }`}
    >
      {children}
    </span>
  )
}

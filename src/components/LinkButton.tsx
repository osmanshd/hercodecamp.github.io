import React from "react"

export const IcterineLinkButton: React.FunctionComponent = ({ children }) => {
  return (
    <span className="inline-block px-5 py-2 font-mono font-bold text-black uppercase cursor-pointer bg-icterine hover:bg-iris hover:text-white">
      {children}
    </span>
  )
}

export const IrisLinkButton: React.FunctionComponent = ({ children }) => {
  return (
    <span className="flex-wrap inline-block px-5 py-2 font-mono font-bold text-white uppercase border cursor-pointer border-iris bg-iris hover:bg-icterine hover:text-black">
      {children}
    </span>
  )
}

export const TransparentLinkButton: React.FunctionComponent = ({
  children,
}) => {
  return (
    <span className="inline-block px-5 py-2 font-mono font-bold uppercase border cursor-pointer bg-icterine border-icterine hover:bg-transparent hover:text-white">
      {children}
    </span>
  )
}

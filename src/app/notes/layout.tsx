import React from 'react'

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <div>note layout {children}</div>
  )
}

export default layout
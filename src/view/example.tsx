import React from 'react'

type UserInfo = {
  name: string,
  age: number,
}

// export const User = ({ name, age }: UserInfo) => {
//   return (
//     <div className="App">
//       <p>{ name }</p>
//       <p>{ age }</p>
//     </div>
//   )
// }

// const user = <User name='vortesnail' age={25} />

export const User:React.FC<UserInfo> = ({ name, age }) => {
  return (
    <div className="User">
      <p>{ name }</p>
      <p>{ age }</p>
    </div>
  )
}

// const user = <User name='vortesnail' age={25} />
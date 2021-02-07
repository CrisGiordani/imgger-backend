import React from 'react'

import { Logo, UserCard } from 'components'
import logo from '../../../img/imgger.svg';

export const AppHeader = props => (
  <div className="bg-blue-darker">
    <div className="max-w-2xl flex items-center bg-blue-darker py-2 px-4 mx-auto">
      <img src={logo} alt="imgger" />

      <UserCard className="ml-auto" colorTheme="light" />
    </div>
  </div>
)

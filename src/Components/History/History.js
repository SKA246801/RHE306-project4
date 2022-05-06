import React, { useState } from 'react'
import './History.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

const History = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='history-page'>
        <h1 className='title'>History</h1>
        <div className='img-container'>
          <img
            src={require('../../assets/images/capitol.jpg')}
            alt='The Capitol of the United States'
            className='capitol'
          />
          <p className='caption'>
            The Capitol Building of The United States of America located in
            Washington D.C.
          </p>
        </div>
        <p className='text'>
          The electoral college has been around for many years and is known as
          the way the citizens of the United States pick their president. What
          is not known however is its history. The electoral college was created
          during the Constitutional Convention of 1787. It was created in order
          to provide a method that would elect the president and vice president
          that were the most qualified. There have been multiple reasons
          provided throughout history for the reason of its creation such as the
          balance between large and small states, slavery, the risks associated
          with direct democracy and so forth. In its original form whomever
          received the majority of the votes was elected president and the
          second most became the vice president. If there was a tie then the
          president would be determined by the House of Representatives which is
          still the case today. In 1804 the 12th amendment was added to the
          constitution allowing separate ballots for the president and vice
          president. The members of the electoral college are elected by popular
          vote. The presidential candidate that they vote for is determined by
          the candidate that wins the majority of the vote in their state. In
          which case the electoral votes of the entire state are dedicated to
          that candidate, no matter how small a margin that candidate won by.
          This happens in every state except in Maine and Nebraska in which they
          allocate their electoral votes by dividing themselves into districts
          and give separate electoral college votes for each district with the
          majority of the state winner getting a 2 electoral college vote bonus.
          The winner-take-all system favors majority parties and large states
          versus minor parties and small states. This is why if you view the{' '}
          <a href='/map'>
            <b>map</b>
          </a>{' '}
          you will see these states in purple.
        </p>
        <p className='text'></p>
      </div>
    </div>
  )
}

export default History

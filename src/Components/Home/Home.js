import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='homepage'>
        <h1 className='homepage-title'>The Electoral College</h1>
        <div className='homepage-img-container'>
          <img
            src={require('../../assets/images/electoral-college-cartoon.jpg')}
            className='homepage-img'
            alt='Political Cartoon about the Electoral College'
          />
          <p className='homepage-img-caption'>
            Political Cartoon about the Electoral College
          </p>
        </div>
        <h3 className='subtitle'>What is it?</h3>
        <p className='homepage-text'>
          The electoral college is a system comprised of electors that choose
          the president of the United States. When voting time comes around the
          citizens of America vote for these electors. Each elector gets to cast
          one electoral vote and is supposed to choose based on the results of
          their respective state. There are a total of 538 votes distributed
          amongst the 50 states, the amount depends on the state's population.
          This means that the candidate to get to 270 first wins the election
          since that is the majority.
        </p>
        <h3 className='subtitle'>The Controversy</h3>
        <p className='homepage-text'>
          Although the electoral college is the method America uses, it doesn't
          mean that everyone enjoys it. Who blames them? With the current system
          we technically don't even choose the president. We trust in people to
          make that decision based on our beliefs but they don't even do that
          all of the time. There have been numerous times that an elector voted
          against their state. Although it has never been enough to alter the
          election results, it has happened more in recent years. In the 2016
          election, seven electors went against their state with five changing
          to Trump and two to Hillary.
          <br></br>
          <br></br>
          The electoral college also causes the presidential candidates to focus
          only on swing states. A swing state is one in which the Democrats and
          Republicans have a similar amount of support so the winner is usually
          determined by a small margin. The candidates tend to have most of
          their campaigns in these states because it would be a 'waste' of
          resources to campaign in states they know for sure they will win or
          lose. Texas for instance, has voted Republican for 42 years so the
          Republican candidate declares Texas as a victory before the
          campaigning even starts and its a loss for the Democrat. Florida
          however will go back and forth between the two with no real
          consistency so both candidates will campaign heavily in this state
        </p>
        <h3 className='subtitle'>The Solution</h3>
        <p className='homepage-text'>
          A solution to the issue of the electoral college is a national popular
          voting system (NPV). A NPV would elect the president based on all of
          the votes in America and determine the winner by the person with the
          most votes. This would ensure that the person that is elected
          president would be the candidate that Americans actually voted for. It
          would also help the issue of presidential candidates focusing their
          campaigns on a few swing states. We also would not have to worry about
          electoral college members not voting on the results of their state but
          of personal interest.
        </p>
        <h3 className='subtitle'>Conclusion</h3>
        <p className='homepage-text'>
          The electoral college is a thing of the past and needs to be
          eradicated. You may ask why this is even around and see that a NPV is
          clearly the better option. Well the sad truth is that the Electoral
          College is still here because he Republicans know they will never win
          another election. With the younger generation overwhelmingly
          increasing their voice in politics and choosing democrat, we may never
          see a Republican president again should this change happen. The only
          way to abolish it is to vote against it and for us to come together
          and vote it out of the constitution. It will be a difficult journey
          but the final destination will be worth it.
        </p>
      </div>
    </>
  )
}

export default Home

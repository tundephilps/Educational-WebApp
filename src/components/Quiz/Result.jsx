import React from 'react'

export default function Result  ({ countCorrectAnswers }) {
  return (
    <>
    <p>
        You got <strong>{countCorrectAnswers}</strong> correct!
    </p>
    <p>Thanks for playing</p>
    </>
  )
}

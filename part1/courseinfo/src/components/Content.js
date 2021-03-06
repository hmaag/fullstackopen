import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    const sum = (p1, p2) => p1 + p2
    const total = parts.map(part => part.exercises).reduce(sum)
    //const total = parts.part.exercises.reduce((sum, value) => sum + value, 0)
    return (
        <>
            {parts.map((part) =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
            <p>Total of {total} exercises</p>
        </>
    )
}

export default Content
import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ name, parts }) => {
    return (
        <>
            <Header header={name} />
            <Content parts={parts} />
        </>
    )
}

export default Course
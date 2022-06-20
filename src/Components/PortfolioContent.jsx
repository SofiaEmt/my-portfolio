import React from 'react'
import Glc from './Glc'
import Wg from './Wg'
import Th from './Th'
import Sod from './Sod'

function PortfolioContent() {
    return (
        <section className="products">
            <Wg />
            <Sod />
            <Th />
            <Glc />
        </section>
    )
}

export default PortfolioContent
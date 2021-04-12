import React from 'react'

import { Loader, Section } from 'react-bulma-components'

const Loading = () => {

    return(

        <Section>
        <div className="columns is-centered is-vcentered is-mobile">
            <Loader  style={{ width: 100, height: 100, border: '2px solid #0d1b2', borderTopColor: 'transparent', borderRightColor: 'transparent' }} />
        </div>
        </Section>
    )
}

export default Loading;
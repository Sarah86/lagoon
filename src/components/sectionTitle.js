import React from "react"

const SectionTitle = ({title, subtitle}) => {
    return(
        <>
        <h2 className="mt-0 mb-10">{title}</h2>
        <h3 className="mt-0 mb-40 font-size-14 text-uppercase ltr-sp-05 text-secondary" style={{lineHeight: 1}}>{subtitle}</h3>
        <div className="lqd-h-sep w-10 mb-40">
            <span className="lqd-h-sep-inner" />
        </div>
        </>
    )
}

export default SectionTitle
import React from "react"

const Header = ({links}) =>
    <header>
        <h1>React SPA</h1>
        <nav>
            { links.map( (link,i)=> <a key={i} href={`/${link}`}>{link}</a> ) }
        </nav>
    </header>

export default Header
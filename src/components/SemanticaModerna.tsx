import React from 'react'

export const SemanticaModerna = () => {
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>

            <nav>
                {/* main navigation in here  */}
            </nav>

            {/* Here is our page's main content  */}
            <main>
                {/* It contains an article  */}
                <article>
                    <h2>Article heading</h2>

                    {/* <!-- article content in here --> */}
                </article>

                <aside>
                    <h2>Related</h2>

                    {/* <!-- aside content in here --> */}
                </aside>
            </main>
            {/* 
            <!-- And here is our main footer that is used across all the pages of our website --> */}

            <footer>
                {/* <!-- footer content in here --> */}
            </footer>

        </>
    )
}

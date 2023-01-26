import "./styles/fondo.css"

const hero = ( {title} )=> {
    return (
        <section className="hero hero-slide-1">
            <div className="hero-container">
                <article className="hero-container__text-box">
                    <h1> {title} </h1>
                    <p>
                        <strong>tienda online</strong>

                    </p>
                <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    )
}
export default hero
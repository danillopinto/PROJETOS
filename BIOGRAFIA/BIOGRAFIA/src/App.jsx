import img from "./img/undraw_coding_re_iv62.svg"
import insta from "./img/new-Instagram-logo-white-glyph.png"
import git from "./img/178-1787243_github-icon-png-github-icon-white-png.png"
import linkedin from "./img/Patrima-Outline.otf.png"
function App() {

  return (
    <div>

      <header>
        <img src={img} alt="" id="img" />
        <h2>Danillo Carvalho</h2>
        <h3>Web developer</h3>
      </header>

      <main>
        <a href="https://www.instagram.com/danyllo_pinto/" target="_blank"><div id="div1"><img src={insta} alt="" id="insta" /></div></a>
        <a href="https://github.com/danillopinto" target="_blank"><div id="div2"><img src={git} alt="" id="git" /></div></a>
        <a href="https://www.linkedin.com/in/danillo-carvalho-46874b1a4/" target="_blank"><div id="div3"><img src={linkedin} alt="" id="linkedin" /></div></a>
      </main>

      <section>
        <a href="https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz#:~:text=O%20profissional%20desenvolvedor%20front%2Dend,como%20HTML%2C%20CSS%20e%20JavaScript." target="_blank"><h4 className="btn">O que eu faço?</h4></a>
        <h4 className="btn">Acesse meu portfólio</h4>
        <h4 className="btn">Contato</h4>
      </section>

    </div>
  )
}

export default App

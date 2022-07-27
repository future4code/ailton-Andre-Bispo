import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './components/Images/Foto.jpeg'
import Seta from './components/Images/Seta.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="Foto"
          nome="André Luiz"
          descricao="Bem eu sou o André Luiz, minha mãe queria ter um príncipe por isso meu nome completo é André Luiz Amaral de Oliveira Bispo, eu tenho 26 anos, sou capricorniano com ascendente em Leão e lua em Peixes (pra quem se interessa), não sou muito fã de aniversario pois sempre fiz aniversario entre natal e ano novo, e como sou de família budista, eu só ganhava O presente do aniversário.
Atualmente moro com meus pais, devido a pandemia e alguns outros pontos, tenho uma gata e uma cachorra, ambas resgatadas. Sou eclético em relação a músicas, mas em filmes, jogos e livros evito temas mais tensos e obscuros (pois entrar nesses universos é uma experiência que prefiro evitar) mas evitar não é não o mesmo que não consumir né.
Eu já trabalhei em muita coisa diferente e os que mais gostei (pra simplificar) foram: Trabalhei em elétrica, até fiz curso no SENAI pra poder ser eletricista, trabalhei como professor por consequência da faculdade de pedagogia que eu cursava na época (mas não consegui continuar, mas é uma meta que eu ainda vou concluir) e já trabalhei com programação com a linguagem Flutter, o que me fez criar mais apetite por programação e designer."
        />

        <ImagemButton imagem="Seta" texto="Ver mais" />
      </div>
      <div>
        <CardPequeno
          email="aluiz.x6@gmail.com"
          local="Av. Paulo Guilguer Reimberg, 13 - Jardim Maria Fernandes, São Paulo - SP, 04858-570"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import initialData from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área, os termos HTML, CSS e JavaScript fazem parte da rotina dos desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[5]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;

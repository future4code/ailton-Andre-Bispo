import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Ana Luiza"}
        fotoUsuario={"https://picsum.photos/48/50"}
        fotoPost={"https://picsum.photos/198/150"}
      />
      <Post
        nomeUsuario={"Ana Julia"}
        fotoUsuario={"https://picsum.photos/49/50"}
        fotoPost={"https://picsum.photos/199/150"}
      />
      <Post
        nomeUsuario={"Ana Paula"}
        fotoUsuario={"https://picsum.photos/30/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
    </MainContainer>
  );
}

export default App;

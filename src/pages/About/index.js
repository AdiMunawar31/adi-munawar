import React from "react";
import {
  boot,
  css,
  html,
  java,
  js,
  matc,
  next,
  php,
  py,
  react,
  sass,
  tail,
  vue,
  lara,
  ci,
  node,
  ex,
  dj,
  jquery,
  hub,
  git,
  bit,
  vs,
  figma,
  xd,
  sub,
  fire,
  verc,
  netlify,
  dock,
  redux,
  mys,
  mdb,
  and,
  spr,
  kot,
  ts,
  scikit,
  kb,
  fl,
  rn,
  deno,
  gql,
  go,
} from "../../assets";
import {
  Box,
  Card,
  Jumbotron,
  Navbar,
  Profile,
  Timeline,
} from "../../component";

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Profile />
        <Box title="LANGUAGE">
          <Card img={php} name="PHP" style="#9400ff" />
          <Card img={js} name="JAVASCRIPT" style="yellow" />
          <Card img={java} name="JAVA" style="red" />
          <Card img={py} name="PYTHON" style="blue" />
        </Box>

        <Box title="FRONT END">
          <Card img={html} name="HTML 5" style="#ff6d00" />
          <Card img={css} name="CSS 3" style="#0277bd" />
          <Card img={boot} name="BOOTSTRAP" style="#673ab7" />
          <Card img={sass} name="SASS" style="#f06292" />
          <Card img={jquery} name="JQUERY" style="blue" />
          <Card img={vue} name="VUE JS" style="#7bd47e" />
          <Card img={matc} name="MATERIALIZE CSS" style="#eb7077" />
          <Card img={tail} name="TAILWIND CSS" style="#3ab2af" />
          <Card img={react} name="REACT JS" style="#61dafb" />
          <Card img={next} name="NEXT JS" style="#5e5e5e" />
        </Box>

        <Box title="BACK END">
          <Card img={lara} name="LARAVEL" style="#fb503b" />
          <Card img={ex} name="EXPRESS JS" style="#5e5e5e" />
          <Card img={ci} name="CODEIGNITER" style="#ee4323" />
          <Card img={node} name="NODE JS" style="#4caf50" />
        </Box>

        <Box title="TOOLS AND DATABASE">
          <Card img={vs} name="VS CODE" style="#29b6f6" />
          <Card img={git} name="GIT" style="#f4511e" />
          <Card img={hub} name="GITHUB" style="#eaeaea" />
          <Card img={sub} name="SUBLIME" style="#f89820" />
          <Card img={xd} name="ADOBE XD" style="#ff2bc2" />
          <Card img={figma} name="FIGMA" style="#a259ff" />
          <Card img={dock} name="DOCKER" style="#0091e2" />
          <Card img={redux} name="REDUX" style="#764abc" />
          <Card img={mys} name="MYSQL" style="#003c6b" />
          <Card img={mdb} name="MONGO DB" style="#4caf50" />
          <Card img={fire} name="FIREBASE" style="#ffc400" />
        </Box>

        <Box title="INFRASTRUCTURE">
          <Card img={hub} name="GITHUB PAGES" style="#eaeaea" />
          <Card img={fire} name="FIREBASE HOSTING" style="#ffc400" />
          <Card img={verc} name="VERCEL HOSTING" style="#202020" />
          <Card img={netlify} name="NETLIFY HOSTING" style="#25c7b7" />
        </Box>
        <Box title="TRIED BUT RARELY">
          <Card img={and} name="ANDROID STD" style="#85b64d" />
          <Card img={kot} name="KOTLIN" style="#597dff" />
          <Card img={spr} name="SPRING" style="#77bc1f" />
          <Card img={dj} name="DJANGO" style="#2ba977" />
        </Box>
        <Box title="MOBILE">
          <Card img={fl} name="FLUTTER" style="#02539a" />
          <Card img={rn} name="REACT NATIVE" style="#80deea" />
        </Box>
        <Box title="CURRENTLY LEARNING">
          <Card img={ts} name="TYPESCRIPT" style="#1976d2" />
          <Card img={scikit} name="SK.LEARN" style="#f89939" />
          <Card img={deno} name="DENO" style="#444" />
          <Card img={kb} name="KUBERNETES" style="#326de6" />
          <Card img={gql} name="GRAPHQL" style="#e535ab" />
          <Card img={go} name="GOLANG" style="#333" />
        </Box>
      </div>
    </div>
  );
};

export default About;

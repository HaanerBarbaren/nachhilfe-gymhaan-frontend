import Page from "../Components/Page";
import Bauarbeiter from "../Components/Bauarbeiter";

function Privacy() {
  return (
    <Page title={"Datenschutz"}>
      <h1>Disclamer</h1>
      <p>
        Die Nachhilfeplattform ist ein Schulprojekt des Q1 Informatikkurses.{" "}
        <br /> Daher halten wird keinerlei Datenschutzrichtlinien gemäß der
        europäischen Datenschutz-Grundverordnung ein. Sollte dies ein Problem
        darstellen, sollte die Webseite nur für die Suche und nicht für die
        Registrierung verwendet werden, da nur bei der Registrierung persönliche
        Daten erhoben werden.
      </p>
    </Page>
  );
}

export default Privacy;

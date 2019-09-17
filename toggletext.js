var status = "less";

function toggleText() {
  var text =
    "Duunitorilla on Suomen eniten työpaikkoja tarjolla ja se on myös Suomen liikennöidyin rekrytointimedia. Duunitori vie tiedon ja kiinnostavat sisällöt työnantajista ja työpaikoista sinne, missä ihmiset jo ovat – suoraan sosiaaliseen mediaan tai Suomen liikennöidyimpään rekrytointimediaan. Duunitorilla käy yli 500 000 viikkokävijää ja somessa sivujamme seuraa yli 600 000 ihmistä.";

  if (status == "less") {
    document.getElementById("textArea").innerHTML = text;
    document.getElementById("toggleButton").innerText = "Piilota";
    status = "more";
  } else if (status == "more") {
    document.getElementById("textArea").innerHTML = "";
    document.getElementById("toggleButton").innerText = "Lue lisää";
    status = "less";
  }
}

function toggleText2() {
  var text =
    "a muista, me innostutaan hyvin paljon sun omista projekteista, joten älä unohda mainita ja linkata näitä! Miltäs tämä toivelista kuulostaa: osaat tuottaa fronttikoodia, HTML, CSS/SASS ja JavaScript ovat tuttuja kavereita, erilaiset frameworkit taipuu tai vähintään olet valmis ottamaan näitä haltuun tarpeen vaatiessa. Lisäksi mahtavaa, jos olet joskus koskenut johonkin seuraavista: Photoshop/Illustrator/Sketch/XD/Figma/lisää-joku-siisti-uusi-design-ohjelma-tähän, mutta loppupeleissä Designing In The Browser on myös erittäin ok. Meille tärkeintä on toimiva, hyvän tuntuinen sekä näköinen lopputuote. Plussa toki myös siitä, jos Django tuo sulle mieleen muutakin kuin jazzin tai Tarantinon. Meillä saat alusta alkaen vapautta tehdä asioita sillä tavalla kun just sä parhaaksi näet. Tämän vastapainoksi me odotetaan itseohjautuvuutta eli kykyä johtaa omaa duunia ja ajankäyttöä. Yes, I’m in! Mitä mun pitää tehdä seuraavaksi? Nyt on sun aika vakuuttaa meidät. Me halutaan tietää mitä osaat, joten anna koodin ja visuskilssien puhua puolestaan. Me toivotaan, että pystyisit jo hakemukseesi linkkaamaan esimerkkejä projekteista, joiden parissa oot puuhaillut. Kerro toki myös, miksi juuri Duunitori ja tämä rooli kiinnostaa. Ole luova ja tee hakemuksesta vapaasti sun näkönen!";
  if (status == "less") {
    document.getElementById("textArea2").innerHTML = text;
    document.getElementById("toggleButton2").innerText = "Piilota";
    status = "more";
  } else if (status == "more") {
    document.getElementById("textArea2").innerHTML = "";
    document.getElementById("toggleButton2").innerText = "Lue lisää";
    status = "less";
  }
}

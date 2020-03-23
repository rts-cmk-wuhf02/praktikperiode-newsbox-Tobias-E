## Praktik opgave newsbox!
I denne praktikperiode skal I udvikle en nyheds webapplikation som er optimeret til den mobile skærm. I applikationen skal der listes nyheder fra The New York Times i et kategoriseret nyhedsoverblik. Det skal være muligt at vælge(klikke på) en nyhed i listen, hvorefter brugeren vil blive sendt videre til den fulde artikkel på nytimes.com.<br><br>
Nyhedsartikkeler skal også kunne gemmes i et privat nyhedsarkiv. Gem funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en nyhed. Fra det private nyhedsarkiv kan ligeledes tilgås artikler og artikler kan slettes. Slet funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en arkiveret nyhed.<br><br>
Fra settings panelet skal brugeren have mulighed for at administrere det kategoriseret nyhedsoverblik ved at slå visning til eller fra for nyhedskategorier. Fra settings panelet skal brugeren også kunne skifte mellem lyst og mørkt tema fra settings panelt.
<br>
<br>
**Varighed:**<br>
Praktik projektet skal seneste være færdigt og afleveret fredag d. 17/4 kl. 13:40.<br>
Før projektet startes vil jeg gerne høre jeres individuelle bud på, hvor længe i forventer at skulle bruge og hvordan i er kommet frem til dette estimat. I kan med fordel Google jer frem til hvordan man estimere bedst muligt.

**Målet med opgaven er:**<br>
At få arbejdet med et CSS framework og få gjort sig nogen erfaringer med et sådanne i et praktisk projekt.
At få erfaring med data konvertering så I kan præsentere data fra tredjepart services som ikke leverer data i JSON format.
At arbejde med lagring af indstillinger og data.
At kommunikere med hinanden omkring faglige problemstillinger både på skrift og i virtuelle møder.

**Udfordringen er:**<br>
Det er selvfølgelig en udfordring at vi ikke på samme måde som normalt har mulighed for vejledning på skolen. Jeg har derfor
lavet en "sådan hjælper du andre og sådan kan du spørge om hjælp" liste. 
Du finder listen  i slutningen af denne readme.

## Applikations tech stack

HTML(structure)<br>
Tailwind CSS(UI components)<br>
JavaScript(logic / data collection)<br>
Anime.js(Animations)<br>
Animate.css(Animations)<br>
Ejs(view engine)<br>
Netlify(host)<br>
Gulp(build system)<br>

## Opgavebeskrivelse og materiale

**User Interface:**<br>
Se XD fil i mappen projekt-UI.

### Oblikatorisk opgaver:

1. **Projekt planlægning**

   Dit projekt skal planlægges i et Kanban board som er tilknyttet dit projekt på GitHub. Se hvordan du sætter Kanban op på      dit Github projekt her: https://www.youtube.com/watch?v=1mnUlnQCkxs&list=PLX4-t8Zdi_Xp7E8v2S8fmLXPqYSvxK3nC&index=1
   
2. **Datakonvertering**
 
   The New York Times nyheder er tilgængelige i RSS-feeds.
   Et RSS-feed er en [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)-fil der distribueres af TNYT's webserver.      Nyhedsdata leveres altså ikke i JSON format og det er derfor nødvendigt at få konvateret data fra XML- til JSON format for    at I kan arbejde med data-præsentation som i plejer.

   **Her er lidt ressourcer som kan hjælpe jer:**
      1. https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
      2. https://dev.to/niinpatel/converting-xml-to-json-using-recursion-2k4j
      
   **TIP:**
   Opret et sandbox miljø hvor du kan ekspermantere med at konvertere data fra XML til JSON før du implementerer i projektet.
   
3. **Animationer**

   En nyhedskategori kan være "åben", så de relaterede artikler fremgår af en liste herunder. En nyhedskategori kan også være    "lukket", sådan at det kun er nyhedskategorien som fremgår af listen men ikke de relaterede artiker. Det er din opgave at      animere overgangen mellem "åben" / "lukket" tilstand på en lækker måde.
 
   I settingspanelt kan man "tænde og slukke" for nyhedskategorier. Det er din opgave at animere "kontakternes/switches"          overgang fra "tænt" til "slukket".
 
4. **UI komponenter**

   Du skal udvikle applikationens UI komponenter med frameworket tailwindcss.

5. **Funktioner**
   
   I settings-panelet skal brugeren have mulighed for at administrere det kategoriseret nyhedsoverblik ved at slå visning        til og fra på udvalgte nyhedskategorier. Det skal også være muligt at skifte mellem lyst og mørkt tema fra settings panelt    og applikationen skal "huske" indstillingerne. 
   
   Nyhedsartikkeler skal også kunne gemmes i et privat nyhedsarkiv. Gem funktionen bliver synlig når der swipes til venstre      [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png        "swipe illustration") på en nyhed. Fra det private nyhedsarkiv kan ligeledes tilgås artikler og artikler kan slettes. Slet    funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en arkiveret nyhed.<br><br>

6. **Deploy on Netlify**

   Din webapplikation skal udgives på Netlify.


## Nice to have opgaver
Husk at 'nice-to-have' opgaverne **ikke** er valgfrie opgaver! Jeg forventer at du begynder at udvikle nedenstående fetures, når du er færdig med de oblikatoriske opgaver. Husk også at jo flere features du har med i projektet, jo federe er det at vise frem i sit portfolio.

1. Tilføj Swipe-down to refresh på nyhedsliste:
    [se illustraion](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/pull-to-refresh-823x1024.png "swipe-down")
2. Feature tutorial første gang webapplikationen bruges: [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/tutorial.png "tutorial")
3. Gør det muligt at redigere rækkefølgen på kategorier i settings. Rækkefølgen skal have indflydelse på den rækkefølge kategorierne listes i nyhedslisten.

## Aflevering og evaluering
Opgaven skal være færdig senest fredag d. 17/4 kl. 13:40. Dvs. at det sidste push inden sluttidspunktet udgør din aflevering. Dit projekt vil blive testet på en telefon(iPhone 11), så det er vigtigt at du også tester på din telefon, og ikke udelukkende tester i browserens emulator.

**Min applikation er tilgængelig på følgende url:**
Her skal du angive din webapplikations URL(Netlify) 

## Se her hvis du får brug for hjælp
**StackOverflow:**<br>
På 'cmk-stacken' har I mulighed for at hjælpe eller få hjælpe fra hinanden og skolens undervisere.
https://stackoverflow.com/c/rts-cmk/questions

Det er et **krav** at i bruger *"Hvordan stiller jeg et godt spørgsmål?"* som guide for udformning af jeres spørgsmål.
https://stackoverflow.com/help/how-to-ask

**Microsoft Teams:**<br>
I kan også holde møder på Skype for business, hvis i skal diskutere en problemstilling. I kan dele jeres skærm og i kan sågar fjernstyre hinandens maskiner, hvis det er nødvendigt at hjælpe med for eksempel debugging.
https://teams.microsoft.com/l/channel/19%3a1b3dcaedd4b44f3b9a84e6b19377f71e%40thread.tacv2/Generel?groupId=856d6686-7cf1-44f0-a45b-e96706667d75&tenantId=b99bf9e9-f5ba-4922-9c48-3b1458bd8136

**Live share:**<br>
Denne VSCode extensions giver jer ligeledes mulighed for at dele udviklingsmiljø med hinanden.

Rigtig god arbejdslyst
Troels

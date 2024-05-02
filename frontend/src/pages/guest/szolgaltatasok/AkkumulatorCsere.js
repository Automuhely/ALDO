import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import useAuthContext from "../../../contexts/AuthContext";
import Footer from "../../../components/guest/Footer";

export default function AkummulatorCsere() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <h1>Akummulátor</h1>
        
        <h3>
          Ha nehezen indul be a kocsid, valószínű az akkumulátorral van gond.
          Mielőbb keresd fel egyik szervizünket, hogy kiderítsük, melyik fődarab
          hibás. Az akkumulátor átvizsgálása ingyenes, foglalj időpontot MOST!
        </h3>
        
        <h3>AKKUMULÁTOR - BEMUTATJUK</h3>
        <p>
          Az akkumulátor működése a technika világában járatlan
          gépjármű-tulajdonosoknak misztikusnak tűnhet. Pedig misztikáról szó
          sincs. Nem kell, hogy mindenki értsen a gépkocsikhoz. Mi azért vagyunk
          szakemberek, hogy Önnek segítsünk. Az akkumulátorral kapcsolatos
          gondok döntően október végétől sokasodnak meg, és ahogy eljön a
          tavasz, egyre kevesebb lesz rájuk a panasz. Előfordul, különösen
          télen, hogy indítózás közben a motor nem indul be.
        </p>
        
        <h4>Mikor lehet indokolt az akkumulátor csere?</h4>
        <ul>
          <li>
            Ha indítózás közben a motor a szokásos sebességgel pörög, akkor a
            gyújtással, vagy az üzemanyag-ellátó rendszerrel lehet gond.
          </li>
          <li>
            Ha hallhatóan lassabban forog az önindító és a motor, akkor az akku,
            a vezetékrendszer, és az önindító hibája miatt nem indul be könnyen
            a kocsi.
          </li>
        </ul>
        <p>
          Ha bármelyik problémát tapasztalod az autó akkumulátoroddal
          kapcsolatban, minél előbb jelentkezz be hozzánk egy ingyenes
          akkumulátor ellenőrzésre. Az akkumulátor ellenőrzés során
          megállapítjuk melyik fődarab a hibás, majd részletes{" "}
          <Nav.Link href="/kapcsolat"> árajánlatot</Nav.Link> készítünk
          számodra.
        </p>
        
        <h4>Mi az akkumulátor?</h4>
        <p>
          Az akkumulátor energiatároló berendezés, amely töltéskor a bevezetett
          villamos energiát vegyi energiává alakítja át, vegyi energia
          formájában huzamosabb ideig tárolni tudja, majd kisütéskor villamos
          energiává alakítja vissza.
        </p>
        
        <h4>Hogyan működik az akkumulátor?</h4>
        <p>
          Az akkumulátorra fogyasztót kapcsolva (kisütés) az akkumulátor úgy
          működik, mint egy galvánelem, a töltésszétválasztó folyamat közben
          elektródáinak anyaga átalakul. Amikor ez a folyamat teljesen
          végbement, az akkumulátor kisütött állapotba kerül, a kezdeti
          feszültségértéke lecsökken. A töltés során a pólusaira adott
          feszültség hatására töltőáram alakul ki (ilyenkor az akkumulátor mint
          fogyasztó energiát vesz fel), melynek hatására ez a vegyi folyamat
          fordított irányban megy végbe, és az elektródák anyaga eredeti
          állapotba kerül vissza. A folyamat végén az akkumulátor feltöltődött,
          és ismét képes energiát szolgáltatni. Az akkumulátor kapocsfeszültsége
          a kisütés során folyamatosan csökken, a töltés során folyamatosan nő.
          Ha kisütés közben kapocsfeszültsége a – típusától függő – érték alá
          esik, az akkumulátor kisült, a kisütést be kell fejezni, mert a
          további terhelés az akkumulátor károsodását okozhatja. A töltést
          szintén be kell fejezni, amikor a kapocsfeszültség a töltésre megadott
          értéket eléri.
        </p>
        
        <h4>Az autó akkumulátor</h4>
        <p>LEGTÖBB GOND TÉLEN LEHET VELE</p>
        <p>
          A gépkocsikban ún. savas ólomakkumulátorokat alkalmaznak, melyek
          névleges cellafeszültsége 2V. Az általánosan használt 12 V-os
          akkumulátor 6 darab, sorosan kapcsolt cellát tartalmaz. Van
          gondozásmentes autó akkumulátor is, ez ma az elterjedtebb, és van
          hagyományos, gondozást igénylő akkumulátor. Egy gépjárműindító
          akkumulátor címkéjén (adattábláján) megtalálható: a gyártó neve, az
          akkumulátor típusa (pl. PERION 2000 A2262), fajtajelölése (pl.
          abszolút gondozásmentes, hibrid rendszerű, kalciumos ólomötvözettel
          gyártott) és főbb elektromos paraméterei, pl. 12 V, 62 Ah. 420 A (MSZ)
          550 A, (SAE) valamint a termék egységes termékazonosító kódja (ETK) a
          pontos és félreérthetetlen azonosítás céljából.
        </p>
        
        <h4>Mi az autó akkumulátor feladata?</h4>
        <ul>
          <li>Beindítja a gépjárművet</li>
          <li>
            Energiát szolgáltat a gépjármű elektromos fogyasztóinak (fényszórók,
            riasztó, ablakfűtés, ablaktörlő lapátok, fedélzeti számítógép, stb.)
          </li>
        </ul>
        <p>
          Az akkumulátor VESZÉLYFORRÁS! Nem használható az alapvető biztonsági
          rendelkezések betartása nélkül! A túltöltés ugyanúgy tönkreteheti az
          akkumulátort, mint a lemerülés! Ez különösen nagy problémát okozhat
          nagy belső ellenállással rendelkező autó akkumulátorok esetén, ha nagy
          teljesítésű fogyasztóval terhelik, mint az autó önindítója. Az
          akkumulátorra akkor hárul a legnagyobb terhelés, amikor az elektromos
          fogyasztókat úgy használjuk, hogy közben a gépjárműmotor nem jár.
        </p>
        
        <h4>Autó akkumulátor kapacitása</h4>
        <p>
          Az akkumulátor kapacitása az a villamosenergia-mennyiség, amely a
          gépjármű fogyasztóinak ellátásához szükséges. A csereakkumulátor
          kapacitásának nagyobbnak kell lennie, mint az eredetié volt.
        </p>
        <h4>Autó akkumulátor teljesítménye</h4>
        <p>
          A gépjármű beindításához pillanatnyi áramfelvétel szükséges. Minél
          nagyobb az akkumulátor teljesítménye, annál könnyebben indítható a
          gépjármű. Két azonos méretű és kapacitású autó akkumulátor között az
          eltérő teljesítményük tesz különbséget.
        </p>
        
        <h4>Gondozásmentes autó akkumulátor</h4>
        
        <h5>A LEGPRAKTIKUSABB</h5>
        <p>
          Ma a legtöbb gépjárműben már karbantartásmentes, abszolút
          gondozásmentes akkumulátor van. Ezeknél a többnyire teljesen zárt
          típusoknál desztillált víz utántöltése nem lehetséges, a garantált
          élettartama alatt erre nincs is szükség. Önkisülési veszteségük
          minimális. Egyes típusok árammal feltöltve több évig tárolhatók.
        </p>
        
        <h4>Hagyományos autó akkumulátor</h4>
        
        <h5>Autó akkumulátor karbantartása</h5>
        <ul>
          <li>Az akkumulátort és a pólusokat tartsd tisztán, szárazon</li>
          <li>Az autó akkumulátort ne tartsd feltöltetlen állapotban</li>
          <li>Minden kisülés után a lehető leghamarabb töltsd fel</li>
        </ul>
        <p>
          Általános érvényű, hogy a feltöltött akkumulátor az önkisülés miatt
          csak egy bizonyos ideig tárolható. Ezért tanácsos az autó
          akkumulátorokat minden hosszabb ideig tartó üzemen kívül helyezés
          előtt után tölteni.
        </p>
        
        <h4>Autó akkumulátor vizsgálata, lehetséges meghibásodásai</h4>
        <p>
          A legtöbb hibát feszültségméréssel, savsűrűség-vizsgálattal és
          szemrevételezéssel ki lehet deríteni.
        </p>
        
        <h5>Savsűrűség-vizsgálattal kideríthető hibák:</h5>
        <ul>
          <li>
            Savszennyeződés: a sav eliszaposodik, színe barnává, zavarossá
            válik.
          </li>
          <li>
            Ha egy vagy két cellában jelentősen eltér a savsűrűség: két cella
            között szivárgás, illetve rövidzárlat van, vagy a cellaösszekötő
            megszakadt.
          </li>
          <li>
            Töltés után egyenletesen alacsony savsűrűség: az akkumulátor túl
            sokáig állt töltetlenül.
          </li>
          <li>
            Levált etikettek, magas vízfogyasztás: az akkumulátort túltöltötték.
          </li>
          <li>
            Benzin- illetve ecetszag: az autó akkumulátorba alkoholt, vagy
            benzint töltöttek.
          </li>
          <li>
            Megolvadt pólus: a pólusnál rövidre zártak, amikor szerszámmal a
            gépjárműhöz, vagy a töltőkészülékhez csatlakoztatták.
          </li>
        </ul>
        
        <h5>Akkumulátor meghibásodásának általános okai:</h5>
        <ul>
          <li>
            Az akkumulátor meghibásodásának gyakran a hibás vagy a rosszul,
            illetve utólagosan beszerelt elektromos berendezések az okai.
          </li>
          <li>
            Lemerült akkumulátor oka lehet a meghibásodott fényszóró, a nagyon
            rövid távok megtétele, vagy a túl sok áramfogyasztó berendezés. <br /> Az
            akkumulátor nem töltődik fel teljesen, és az aktív massza egy része
            inaktívvá válik. Ennek következménye a kapacitásveszteség és az
            indítóerő csökkentése.
          </li>
          <li>
            Túltöltött autó akkumulátor oka a meghibásodott feszültségszabályzó.
            Erre utal, ha a fényszóró lámpái gyakran kiégnek.
          </li>
          <li>
            A túl alacsony akkumulátorkapacitás miatt az autó akkumulátor
            túlzott igénybevételnek van kitéve, ez az akkumulátor károsodásához
            vezet.
          </li>
        </ul>
        
        <h2>
          Nézd végig szervizünkben az autó akkumulátor átvizsgálást, javítást!
        </h2>
      </Container>
      <Footer></Footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Was bezeichnet der Begriff 'Wert' im Kontext von Kanban laut Theorie?",
    options: [
      "Die Kosten der eingesetzten Arbeitsmittel",
      "Den Nutzen und die Bedeutung einer Arbeitsaufgabe für den Kunden",
      "Die Anzahl der Karten auf dem Kanban-Board",
      "Die technische Brillanz einer Lösung"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist Wert das oberste Prinzip und bezeichnet den Nutzen für den Kunden. Er beantwortet die Frage, warum die Arbeit getan wird."
  },
  {
    id: 2,
    text: "Welche Funktion hat ein 'Element' in einem Kanban-System laut Theorie?",
    options: [
      "Es ist ein Werkzeug zur Zeiterfassung",
      "Es ist der physische oder digitale Stellvertreter für einen Kundenwunsch oder eine Aufgabe",
      "Es beschreibt eine Hierarchiestufe im Team",
      "Es ist eine spezielle Software-Funktion"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist ein Element die konkrete Einheit der Arbeit, die das System durchläuft, oft visualisiert als Karte oder Ticket."
  },
  {
    id: 3,
    text: "Was wird unter 'Technik' im Kanban-Sinne laut Theorie verstanden?",
    options: [
      "Die Programmiersprache der Software",
      "Die Hardware-Ausstattung der Mitarbeiter",
      "Konkrete Methoden wie Kanban-Boards, WIP-Limits oder Serviceklassen",
      "Die Automatisierung von Prozessen"
    ],
    correctAnswer: 2,
    explanation: "Laut Theorie sind Techniken bewusst gewählte Methoden wie Boards oder WIP-Limits, mit denen das Team sein System gestaltet."
  },
  {
    id: 4,
    text: "Welches ist ein Grundprinzip des Veränderungsmanagements in Kanban laut Theorie?",
    options: [
      "Alle bestehenden Rollen sofort abschaffen",
      "Dort beginnen, wo man sich gerade befindet",
      "Eine disruptive Revolution von oben verordnen",
      "Nur neue Prozesse ohne Rücksicht auf die Vergangenheit einführen"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie lautet das erste Grundprinzip: 'Beginne mit dem, was du jetzt tust' - bestehende Prozesse und Rollen werden zunächst respektiert."
  },
  {
    id: 5,
    text: "Was besagt das Prinzip der Serviceorientierung in Kanban laut Theorie?",
    options: [
      "Der Kunde hat immer unrecht",
      "Die Arbeit muss als Dienstleistung an den Kunden begriffen werden",
      "Nur die Effizienzziele des eigenen Teams zählen",
      "Service ist nur für die IT-Abteilung relevant"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie fordert die Serviceorientierung, dass das Team die Bedürfnisse der Kunden versteht und Arbeit konsequent als Dienstleistung begreift."
  },
  {
    id: 6,
    text: "Wie unterscheidet sich Kanban von Scrum in Bezug auf Rollen laut Theorie?",
    options: [
      "Kanban schreibt zwingend einen Scrum Master vor",
      "Kanban verbietet jegliche Rollenbezeichnungen",
      "Kanban schreibt keine Rollen vor und respektiert bestehende Strukturen",
      "In Kanban gibt es immer einen 'Kanban Master'"
    ],
    correctAnswer: 2,
    explanation: "Laut Theorie schreibt Kanban keine Rollen vor und ermöglicht es den Mitarbeitern, ihre gewohnten Berufsbezeichnungen beizubehalten."
  },
  {
    id: 7,
    text: "Was ist ein wesentlicher Unterschied zwischen Scrum und Kanban bezüglich Zeitboxen laut Theorie?",
    options: [
      "Kanban nutzt längere Sprints als Scrum",
      "Scrum arbeitet mit fixen Zeitboxen (Sprints), Kanban kennt keine vorgeschriebenen Zeitboxen",
      "In Kanban müssen alle Aufgaben in 24 Stunden erledigt sein",
      "Es gibt keinen Unterschied im Umgang mit Zeit"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie arbeitet Scrum mit fixen Sprints, während in Kanban die Arbeit als kontinuierlicher Strom ohne Batches fließt."
  },
  {
    id: 8,
    text: "Wofür steht die Abkürzung XP in der agilen Softwareentwicklung laut Theorie?",
    options: [
      "Xtra Programming",
      "Extreme Performance",
      "Extreme Programming",
      "eXtended Projects"
    ],
    correctAnswer: 2,
    explanation: "Laut Theorie steht XP für Extreme Programming, eine Methode, die bewährte Praktiken konsequent und diszipliniert anwendet."
  },
  {
    id: 9,
    text: "In welchem historischen Projekt liegen die Wurzeln von XP laut Theorie?",
    options: [
      "Chrysler Comprehensive Compensation System (C3)",
      "Toyota Production System",
      "Das Apollo-Programm",
      "Ford Model T Entwicklung"
    ],
    correctAnswer: 0,
    explanation: "Laut Theorie liegen die Wurzeln von XP in der Arbeit von Kent Beck beim Chrysler C3-Projekt in den 1990er Jahren."
  },
  {
    id: 10,
    text: "Welche Auswirkungen hat die Visualisierung des Workflows laut Theorie?",
    options: [
      "Sie macht die Arbeit komplizierter",
      "Sie schafft radikale Transparenz über den wahren Zustand der Arbeit",
      "Sie dient nur der Kontrolle durch den Chef",
      "Sie reduziert die Anzahl der Aufgaben automatisch"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie schafft das Kanban-Board eine unbestechliche Transparenz und beendet die Bringschuld der Information."
  },
  {
    id: 11,
    text: "Was sind WIP-Limits laut Theorie?",
    options: [
      "Wartezeiten im Prozess",
      "Maximalgrenzen für gleichzeitig in Arbeit befindliche Elemente",
      "Die Anzahl der Mitarbeiter im Team",
      "Wichtige Innovations-Prozesse"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie steht WIP für 'Work in Progress'. WIP-Limits begrenzen die Anzahl der Karten, die sich gleichzeitig in einer Phase befinden dürfen."
  },
  {
    id: 12,
    text: "Welchen Vorteil bieten WIP-Limits laut Theorie?",
    options: [
      "Sie erhöhen die Auslastung jedes Einzelnen auf 100%",
      "Sie reduzieren Multitasking und erhöhen die Durchlaufgeschwindigkeit",
      "Sie ermöglichen es, mehr Aufgaben gleichzeitig zu starten",
      "Sie machen das Kanban-Board bunter"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie reduzieren WIP-Limits das lähmende Multitasking und führen zu einer drastischen Reduktion der Durchlaufzeiten."
  },
  {
    id: 13,
    text: "Was ist der 'Zeigarnik-Effekt' im Kontext von WIP-Limits laut Theorie?",
    options: [
      "Die Freude über eine erledigte Aufgabe",
      "Der Stress durch unerledigte, im Hinterkopf bleibende Aufgaben",
      "Ein technischer Fehler im Kanban-Board",
      "Die Geschwindigkeit, mit der eine Karte wandert"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie besagt der Zeigarnik-Effekt, dass unerledigte Aufgaben unser Gehirn unbewusst beschäftigen und Stress verursachen."
  },
  {
    id: 14,
    text: "Was gehört zum grundlegenden Aufbau eines Kanban-Boards laut Theorie?",
    options: [
      "Nur eine Spalte 'Erledigt'",
      "Spalten, die Prozessschritte repräsentieren, und Karten für Arbeitselemente",
      "Ein Sitzplan des Büros",
      "Eine Liste aller Urlaubsanträge"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie besteht ein Board aus vertikalen Spalten (Prozessphasen) und Karten, die visuelle Stellvertreter der Arbeit sind."
  },
  {
    id: 15,
    text: "Was sollte laut Theorie vor der Einführung von Kanban passieren?",
    options: [
      "Ein teures Personalberater-Team engagieren",
      "Ein gemeinsames Verständnis für das 'Warum' der Veränderung schaffen",
      "Alle Mitarbeiter entlassen und neu einstellen",
      "Das Büro komplett umbauen"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist die Schaffung eines ehrlichen Verständnisses für die Schmerzpunkte des Alltags ein fundierender erster Schritt."
  },
  {
    id: 16,
    text: "Welche Herausforderung kann bei der Kanban-Implementierung auftreten laut Theorie?",
    options: [
      "Zu viel Freizeit für alle Mitarbeiter",
      "Widerstand gegen die Reduktion individueller Auslastung zugunsten des Flusses",
      "Das Board wird zu schnell leer",
      "Es gibt keine technischen Probleme"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist der Widerstand gegen WIP-Limits oft groß, da 'Nicht-Beginnen' fälschlicherweise als Untätigkeit wahrgenommen wird."
  },
  {
    id: 17,
    text: "Was passierte bei Oleodinamica Marchesini durch Kanban laut Theorie?",
    options: [
      "Die Lieferzeit sank von 13 Wochen auf 4 Tage",
      "Das Unternehmen musste schließen",
      "Die Bestände verdoppelten sich",
      "Die Mitarbeiter mussten mehr Überstunden machen"
    ],
    correctAnswer: 0,
    explanation: "Laut Theorie konnte das Unternehmen durch Kanban die Lieferzeiten drastisch senken und Bestände um über eine Million Euro reduzieren."
  },
  {
    id: 18,
    text: "Wie reagierte MRC Global auf die IT-Überlastung laut Theorie?",
    options: [
      "Sie verboten alle neuen Projekte",
      "Sie schufen Transparenz durch ein digitales Kanban-Board und begrenzten die Arbeit",
      "Sie stellten 100 neue Programmierer ein",
      "Sie führten wieder das Wasserfallmodell ein"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie schuf MRC Global Transparenz und Regeln zur Priorisierung, was den Durchsatz verdoppelte."
  },
  {
    id: 19,
    text: "Was ist ein Vorteil von Extreme Programming (XP) laut Theorie?",
    options: [
      "Man braucht keine Tests mehr",
      "Außergewöhnlich hohe Code-Qualität durch Praktiken wie TDD und Pair-Programming",
      "Jeder arbeitet nur noch alleine",
      "Die Dokumentation wird dicker"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie führt XP durch disziplinierte Praktiken zu hoher technischer Exzellenz und Reduktion von Fehlern."
  },
  {
    id: 20,
    text: "Was ist eine soziale Herausforderung bei XP laut Theorie?",
    options: [
      "Die dauerhafte Zusammenarbeit (Pair-Programming) kann anstrengend sein",
      "Man darf nicht mehr miteinander reden",
      "Das Büro muss immer dunkel sein",
      "Es gibt keine soziale Interaktion"
    ],
    correctAnswer: 0,
    explanation: "Laut Theorie empfinden manche Entwickler die permanente Kommunikation und Beobachtung im Pair-Programming als Belastung."
  },
  {
    id: 21,
    text: "Welcher XP-Wert fordert das Weglassen von unnötiger Komplexität laut Theorie?",
    options: [
      "Mut",
      "Respekt",
      "Einfachheit (Simplicity)",
      "Feedback"
    ],
    correctAnswer: 2,
    explanation: "Laut Theorie bedeutet Einfachheit, nur das zu bauen, was heute wirklich gebraucht wird, um Overengineering zu vermeiden."
  },
  {
    id: 22,
    text: "Was beinhaltet der XP-Wert 'Mut' laut Theorie?",
    options: [
      "Sich alleine gegen den Kunden zu stellen",
      "Die Wahrheit über den Projektstand zu sagen, auch wenn sie unbequem ist",
      "Ohne Sicherheitsgurt Code zu schreiben",
      "Niemanden um Hilfe zu bitten"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie erfordert Mut, Fehler einzugestehen oder ehrlich über Liefertermine zu kommunizieren."
  },
  {
    id: 23,
    text: "Was ist 'Test-Driven Development' (TDD) laut Theorie?",
    options: [
      "Tests werden am Ende des Projekts geschrieben",
      "Der Test wird vor dem eigentlichen Code geschrieben",
      "Der Kunde testet die Software manuell",
      "Es werden gar keine automatischen Tests benötigt"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie wird bei TDD erst ein minimaler fehlschlagender Test geschrieben, bevor der Produktionscode entsteht."
  },
  {
    id: 24,
    text: "Was besagt 'Collective Code Ownership' in XP laut Theorie?",
    options: [
      "Nur der Chef besitzt den Code",
      "Jeder Entwickler darf jeden Teil des Codes jederzeit ändern und verbessern",
      "Der Code gehört einer externen Firma",
      "Jeder hat sein eigenes privates Modul"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie gibt es kein Privateigentum an Modulen; das gesamte Team trägt die Verantwortung für die gesamte Codebasis."
  },
  {
    id: 25,
    text: "Welche Rolle hat der 'Kunde' in einem XP-Team laut Theorie?",
    options: [
      "Er ist nur beim Verkaufsgespräch dabei",
      "Er ist idealerweise vollzeit anwesend und schreibt User Stories",
      "Er darf den Entwicklern keine Fragen stellen",
      "Er ist nur für die Bezahlung zuständig"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist der Kunde in XP eine aktive Rolle, die Prioritäten setzt und direktes Feedback gibt."
  },
  {
    id: 26,
    text: "Warum ist Feedback in XP so wichtig laut Theorie?",
    options: [
      "Um die Mitarbeiter zu bestrafen",
      "Um Annahmen über die Zukunft schnell in der Realität zu validieren",
      "Weil es im Vertrag steht",
      "Damit der Coach etwas zu tun hat"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist Feedback der Lebensnerv, der es ermöglicht, den Kurs des Projekts ständig an die Realität anzupassen."
  },
  {
    id: 27,
    text: "Was ist ein Kerngedanke von 'Lean Development' laut Theorie?",
    options: [
      "Maximale Verschwendung von Ressourcen",
      "Konsequente Vermeidung von Verschwendung (Muda)",
      "Nur die billigsten Mitarbeiter einstellen",
      "Möglichst viele Dokumente erstellen"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie zielt Lean Development darauf ab, alles zu eliminieren, was keinen direkten Wert für den Kunden schafft."
  },
  {
    id: 28,
    text: "Was bedeutet 'späte Entscheidungsfindung' in Lean laut Theorie?",
    options: [
      "Einfach gar nichts entscheiden",
      "Entscheidungen so lange wie möglich aufschieben, bis das maximale Wissen vorliegt",
      "Immer erst am Tag der Lieferung entscheiden",
      "Die Entscheidung dem Zufall überlassen"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie reduziert das Aufschieben von Entscheidungen das Risiko von teuren Fehlentscheidungen aufgrund fehlender Informationen."
  },
  {
    id: 29,
    text: "Was ist die Kernidee der 'Crystal'-Methodenfamilie laut Theorie?",
    options: [
      "Dass jedes Projekt exakt gleich behandelt werden muss",
      "Dass sich die Methode an Teamgröße und Kritikalität des Projekts anpassen muss",
      "Dass nur mit Kristallen gearbeitet wird",
      "Dass XP für alle Projekte die einzige Lösung ist"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie bietet Crystal ein Farbspektrum an Methoden, die je nach Projektkontext ausgewählt werden."
  },
  {
    id: 30,
    text: "Was beschreibt 'Feature Driven Development' (FDD) laut Theorie?",
    options: [
      "Eine Methode, die sich nur auf die Benutzeroberfläche konzentriert",
      "Eine modellgetriebene, agile Methode für größere Teams",
      "Ein Prozess ohne jegliche Planung",
      "Eine Methode nur für Kleinstprojekte"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist FDD eine strukturierte Methode, die auf der Entwicklung eines Gesamtmodells und einer Feature-Liste basiert."
  },
  {
    id: 31,
    text: "Was ist ein 'Feature' in FDD laut Theorie?",
    options: [
      "Ein großer, unklarer Wunsch",
      "Eine kleine, in 2-3 Tagen implementierbare Funktion aus Sicht des Kunden",
      "Ein Fehler in der Software",
      "Ein Handbuch für Benutzer"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist ein Feature eine atomare Einheit der Planung, die einen messbaren Wert für den Kunden stiftet."
  },
  {
    id: 32,
    text: "Was ist 'Muda' im Kontext von Lean laut Theorie?",
    options: [
      "Ein japanischer Feiertag",
      "Verschwendung jeglicher Art",
      "Eine Programmiersprache",
      "Ein spezielles Team-Meeting"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist Muda der Fachbegriff für Verschwendung, die keinen Wert schöpft."
  },
  {
    id: 33,
    text: "Wie viele Kernwerte hat XP laut Theorie?",
    options: [
      "3",
      "5",
      "12",
      "7"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie basiert XP auf 5 zentralen Werten: Kommunikation, Einfachheit, Feedback, Mut und Respekt."
  },
  {
    id: 34,
    text: "Was ist der Nutzen von Pair-Programming laut Theorie?",
    options: [
      "Halbierung der Kosten",
      "Permanente Code-Reviews und schnellere Wissensverteilung",
      "Entwickler können während der Arbeit schlafen",
      "Man braucht weniger Monitore"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie sorgt Pair-Programming für Echtzeit-Qualitätssicherung und verhindert Wissenssilos."
  },
  {
    id: 35,
    text: "Welches Gesetz liegt der Reduktion von Durchlaufzeiten zugrunde laut Theorie?",
    options: [
      "Moore's Law",
      "Little's Law",
      "Murphy's Law",
      "Newton's Law"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie besagt Little's Law, dass die Durchlaufzeit proportional zur Menge der gleichzeitig in Arbeit befindlichen Aufgaben ist."
  },
  {
    id: 36,
    text: "Was ist eine 'Klasse der Dienstleistung' in Kanban laut Theorie?",
    options: [
      "Eine Gehaltsstufe für Mitarbeiter",
      "Vorab definierte Kategorien für Elemente (z.B. Express, Standard) zur Priorisierung",
      "Ein Kurs für Kunden",
      "Ein Bürogebäude"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ermöglichen Serviceklassen die unterschiedliche Behandlung von Aufgaben je nach Dringlichkeit."
  },
  {
    id: 37,
    text: "Was bewirkt 'Integrierte Qualität' in Lean laut Theorie?",
    options: [
      "Fehler erst ganz am Ende suchen",
      "Qualität von der ersten Minute an in den Prozess einbauen",
      "Qualität ist nebensächlich",
      "Nur der Chef prüft die Qualität"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie fordert Lean, Qualität nicht erst am Ende zu prüfen, sondern Fehlervermeidung als integralen Bestandteil zu begreifen."
  },
  {
    id: 38,
    text: "Was kennzeichnet 'Crystal Clear' laut Theorie?",
    options: [
      "Es ist für Teams bis zu 200 Personen geeignet",
      "Es ist für kleine Teams von 2-8 Personen mit geringem Risiko konzipiert",
      "Es erfordert massive Dokumentation",
      "Es ist die komplizierteste Variante von Crystal"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie ist Crystal Clear die leichteste Variante mit Fokus auf direkte Kommunikation für kleine Teams."
  },
  {
    id: 39,
    text: "In welchem Rhythmus findet die Planung in FDD statt laut Theorie?",
    options: [
      "Alle 24 Stunden",
      "In der Regel in einem zweiwöchigen Rhythmus",
      "Nur einmal zu Projektbeginn",
      "Jeden Monat einmal"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie werden Features in FDD meist in einem iterativen, zweiwöchigen Rhythmus geplant und geliefert."
  },
  {
    id: 40,
    text: "Was ist 'Pull-basiertes Arbeiten' in Kanban laut Theorie?",
    options: [
      "Arbeit wird den Mitarbeitern zugewiesen",
      "Mitarbeiter ziehen sich neue Aufgaben eigenverantwortlich, sobald sie Kapazität haben",
      "Man muss an Aufgaben ziehen, um sie zu erledigen",
      "Der Chef zieht die Karten über das Board"
    ],
    correctAnswer: 1,
    explanation: "Laut Theorie arbeitet Kanban nach dem Pull-Prinzip: Arbeit wird erst dann aufgenommen, wenn Kapazität und WIP-Limit es zulassen."
  }
];

/**
 * Vercel API endpoint: /api/photos
 * Returns the photo gallery JSON data (15 entries).
 * Run locally with: npx vercel dev
 */
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const base = "https://raw.githubusercontent.com/jtarchb/project-1/main/assets/images";

  res.status(200).json({
    items: [
      {
        title: "Gareth Bale",
        thumb: `${base}/bale.webp`,
        source: `${base}/bale.webp`,
        description: "Welsh winger Gareth Bale during his time at Real Madrid, known for his explosive pace and powerful long-range strikes.",
        dateTaken: "2016-02-18",
        link: "https://en.wikipedia.org/wiki/Gareth_Bale",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Ousmane Dembele",
        thumb: `${base}/dembele.webp`,
        source: `${base}/dembele.webp`,
        description: "Ousmane Dembele celebrating after a big win, showcasing his joy and flair that has made him one of Europe's top wingers.",
        dateTaken: "2023-06-10",
        link: "https://en.wikipedia.org/wiki/Ousmane_Demb%C3%A9l%C3%A9",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Lionel Messi",
        thumb: `${base}/depositphotos_19190963-stock-photo-leo-messi-of-fc-barcelona.webp`,
        source: `${base}/depositphotos_19190963-stock-photo-leo-messi-of-fc-barcelona.webp`,
        description: "Leo Messi in his prime years at FC Barcelona, directing play with that iconic left hand point. Widely regarded as the greatest of all time.",
        dateTaken: "2012-04-21",
        link: "https://en.wikipedia.org/wiki/Lionel_Messi",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Andres Iniesta",
        thumb: `${base}/iniesta.webp`,
        source: `${base}/iniesta.webp`,
        description: "Andres Iniesta in his final Barcelona season, a true midfield maestro who controlled games with elegance and precision.",
        dateTaken: "2018-10-20",
        link: "https://en.wikipedia.org/wiki/Andr%C3%A9s_Iniesta",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Harry Kane",
        thumb: `${base}/kane.webp`,
        source: `${base}/kane.webp`,
        description: "Harry Kane in England colors, all smiles after another international goal. He is England's all-time leading scorer.",
        dateTaken: "2023-11-17",
        link: "https://en.wikipedia.org/wiki/Harry_Kane",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Lamine Yamal",
        thumb: `${base}/lamine.webp`,
        source: `${base}/lamine.webp`,
        description: "Lamine Yamal celebrating a goal for Barcelona, the teenage sensation already lighting up La Liga at just 16 years old.",
        dateTaken: "2024-09-14",
        link: "https://en.wikipedia.org/wiki/Lamine_Yamal",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Cristiano Ronaldo",
        thumb: `${base}/Legends-Profile_Cristiano-Ronaldo1523460877263.webp`,
        source: `${base}/Legends-Profile_Cristiano-Ronaldo1523460877263.webp`,
        description: "Cristiano Ronaldo in full celebration mode during his legendary years at Manchester United. The hunger and passion are unmistakable.",
        dateTaken: "2008-05-21",
        link: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Robert Lewandowski",
        thumb: `${base}/lewa.webp`,
        source: `${base}/lewa.webp`,
        description: "Robert Lewandowski doing his trademark heart celebration at Bayern Munich, a machine in front of goal season after season.",
        dateTaken: "2020-09-19",
        link: "https://en.wikipedia.org/wiki/Robert_Lewandowski",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Kylian Mbappe",
        thumb: `${base}/mbappe.webp`,
        source: `${base}/mbappe.webp`,
        description: "Kylian Mbappe sliding on his knees in celebration after scoring for Real Madrid, living out his childhood dream at the Bernabeu.",
        dateTaken: "2024-10-05",
        link: "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Thomas Muller",
        thumb: `${base}/muller.webp`,
        source: `${base}/muller.webp`,
        description: "Thomas Muller reflecting on the pitch in Bayern Munich red. The Raumdeuter whose football intelligence is second to none.",
        dateTaken: "2023-08-26",
        link: "https://en.wikipedia.org/wiki/Thomas_M%C3%BCller",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Manuel Neuer",
        thumb: `${base}/neuer.webp`,
        source: `${base}/neuer.webp`,
        description: "Manuel Neuer signaling to his defenders in the Bundesliga, the sweeper-keeper who redefined the goalkeeper position.",
        dateTaken: "2023-09-30",
        link: "https://en.wikipedia.org/wiki/Manuel_Neuer",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Neymar Jr",
        thumb: `${base}/neymar.webp`,
        source: `${base}/neymar.webp`,
        description: "Neymar Jr in Brazil yellow at the 2022 World Cup, all smiles. One of the most skillful and entertaining players of his generation.",
        dateTaken: "2022-11-24",
        link: "https://en.wikipedia.org/wiki/Neymar",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Christian Pulisic",
        thumb: `${base}/pulisic.webp`,
        source: `${base}/pulisic.webp`,
        description: "Christian Pulisic arms wide open after scoring for AC Milan. Captain America proving himself at the highest level in Serie A.",
        dateTaken: "2023-10-22",
        link: "https://en.wikipedia.org/wiki/Christian_Pulisic",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Arjen Robben",
        thumb: `${base}/robben.webp`,
        source: `${base}/robben.webp`,
        description: "Arjen Robben flashing that trademark smile at Bayern Munich. The man who cut inside and scored so many times it became an art form.",
        dateTaken: "2012-08-10",
        link: "https://en.wikipedia.org/wiki/Arjen_Robben",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      },
      {
        title: "Luis Suarez",
        thumb: `${base}/suarez.webp`,
        source: `${base}/suarez.webp`,
        description: "Luis Suarez celebrating wildly in Liverpool red. One of the most lethal strikers of his era and a nightmare for any defender.",
        dateTaken: "2014-01-28",
        link: "https://en.wikipedia.org/wiki/Luis_Su%C3%A1rez",
        author: { name: "football_gallery", image: "", userSince: "2020", channel: "World Football Stars" }
      }
    ]
  });
}
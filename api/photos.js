/**
 * Vercel API endpoint: /api/photos
 * Returns the photo gallery JSON data structure.
 * Run locally with: npx vercel dev
 */
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
 
  res.status(200).json({
    items: [
      {
        title: "Curious Fox",
        thumb: "https://randomfox.ca/images/1.jpg",
        source: "https://randomfox.ca/images/1.jpg",
        description: "A curious fox peers through the underbrush, amber eyes catching the morning light.",
        dateTaken: "2023-03-15",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Morning Stretch",
        thumb: "https://randomfox.ca/images/2.jpg",
        source: "https://randomfox.ca/images/2.jpg",
        description: "Caught mid-stretch after a long nap in the afternoon sun.",
        dateTaken: "2023-04-02",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Snow Hunter",
        thumb: "https://randomfox.ca/images/3.jpg",
        source: "https://randomfox.ca/images/3.jpg",
        description: "A red fox stalks silently through a fresh layer of snow.",
        dateTaken: "2023-01-18",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Golden Hour",
        thumb: "https://randomfox.ca/images/4.jpg",
        source: "https://randomfox.ca/images/4.jpg",
        description: "Bathed in warm evening light as the sun dips below the treeline.",
        dateTaken: "2023-06-21",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Pup at Rest",
        thumb: "https://randomfox.ca/images/5.jpg",
        source: "https://randomfox.ca/images/5.jpg",
        description: "A young fox kit rests near the entrance of its den, keeping watch.",
        dateTaken: "2023-05-10",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Forest Wanderer",
        thumb: "https://randomfox.ca/images/6.jpg",
        source: "https://randomfox.ca/images/6.jpg",
        description: "Trotting through an autumn forest, leaves crunching underfoot.",
        dateTaken: "2023-10-07",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "River Bank",
        thumb: "https://randomfox.ca/images/7.jpg",
        source: "https://randomfox.ca/images/7.jpg",
        description: "Pausing at the edge of a shallow stream, watching reflections ripple.",
        dateTaken: "2023-07-30",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Meadow Fox",
        thumb: "https://randomfox.ca/images/8.jpg",
        source: "https://randomfox.ca/images/8.jpg",
        description: "Standing tall in an open meadow, ears perked toward a distant sound.",
        dateTaken: "2023-08-14",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Winter Den",
        thumb: "https://randomfox.ca/images/9.jpg",
        source: "https://randomfox.ca/images/9.jpg",
        description: "Tucked into a hollow log as frost settles across the countryside.",
        dateTaken: "2023-12-03",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Kit Trio",
        thumb: "https://randomfox.ca/images/10.jpg",
        source: "https://randomfox.ca/images/10.jpg",
        description: "Three kits huddle together, still learning what the world has in store.",
        dateTaken: "2023-05-22",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Nightfall Watch",
        thumb: "https://randomfox.ca/images/11.jpg",
        source: "https://randomfox.ca/images/11.jpg",
        description: "Alert and still just before dusk, reading every shift in the wind.",
        dateTaken: "2023-09-19",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Hilltop View",
        thumb: "https://randomfox.ca/images/12.jpg",
        source: "https://randomfox.ca/images/12.jpg",
        description: "Surveying the valley below from a favorite lookout point.",
        dateTaken: "2023-11-01",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Spring Arrival",
        thumb: "https://randomfox.ca/images/13.jpg",
        source: "https://randomfox.ca/images/13.jpg",
        description: "First warm day of the year, coat beginning to shed its winter thickness.",
        dateTaken: "2023-03-29",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Tall Grass",
        thumb: "https://randomfox.ca/images/14.jpg",
        source: "https://randomfox.ca/images/14.jpg",
        description: "Nearly hidden in summer grass, just a pair of ears giving the game away.",
        dateTaken: "2023-07-04",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      },
      {
        title: "Last Light",
        thumb: "https://randomfox.ca/images/15.jpg",
        source: "https://randomfox.ca/images/15.jpg",
        description: "The final frames of a quiet evening, caught before disappearing into the dark.",
        dateTaken: "2023-10-31",
        link: "https://randomfox.ca",
        author: { name: "randomfox.ca", image: "", userSince: "2018", channel: "Wild Fox Photography" }
      }
    ]
  });
}
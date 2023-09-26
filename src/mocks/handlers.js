import { rest } from "msw";

export const handlers = [
  rest.get("https://www.reddit.com/r/popular/hot/.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "Almost Better than a Double Rainbow",
          thumbnail:
            "https://styles.redditmedia.com/t5_2qh6s/styles/communityIcon_ctrxr9h6lmbb1.jpg",
          author: "Mike",
          score: 2,
          subreddit: "r/AmItheAsshole",
          permalink:
            "https://www.reddit.com/r/AmItheAsshole/comments/15vlv9g/almost_better_than_a_double_rainbow_celebrating/",
        },
        {
          title: "Celebrating 10 Years with 10 Million Amazing Assholes",
          thumbnail:
            "https://styles.redditmedia.com/t5_2qh9s/styles/communityIcon_ctrxr9h6lmbb1.jpg",
          author: "james",
          score: 5,
          subreddit: "r/gameofthrones/",
          permalink:
            "https://www.reddit.com/r/gameofthrones/comments/16pfqw9/finally_got_around_to_reading_up_on_some_of_the/",
        },
        {
          title: "What is the Best Film You Watched Last Week",
          thumbnail:
            "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_ctrxr9h6lmbb1.jpg",
          author: "John",
          score: 6,
          subreddit: "r/Relationship_Advice",
          permalink:
            "https://www.reddit.com/r/movies/comments/16nmquj/what_is_the_best_film_you_watched_last_week/",
        },
      ])
    );
  }),
];

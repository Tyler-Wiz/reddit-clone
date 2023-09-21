export const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`https://www.reddit.com/r/popular.json`);
  const json = await response.json();

  let data = json.data.children.map((child) => child.data);

  console.log(data);
};

export const getPostComments = async () => {
  let permalink = `/r/Jujutsushi/comments/16nbh3m/jujutsu_kaisen_chapter_236_prerelease_leaks_thread/`;
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  let data = json[1].data.children.map((subreddit) => subreddit.data);
  console.log(data);
};

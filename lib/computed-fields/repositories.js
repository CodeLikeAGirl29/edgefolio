const repositories = {
  hasSubFields: false,
  resolve: async (repositories) => {
    if (!Array.isArray(repositories) || !process.env.GITHUB_TOKEN) return null

    const records = await Promise.all(
      repositories.filter(Boolean).map(async (repo) => {
        let res, json
        try {
          res = await fetch('https://api.github.com/repos/' + repo, {
            headers: {
              authorization: process.env.GITHUB_TOKEN
                ? 'token ' + process.env.GITHUB_TOKEN
                : undefined,
            },
          })
          json = await res.json()
        } catch (error) {
          return console.log(error)
        }
        return {
          name: json.name,
          owner: json.owner.login,
          url: json.html_url,
          description: json.description,
          language: json.language,
          stars: json.stargazers_count,
          forks: json.forks_count,
        }
      })
    )
    return { records }
  },
}

export default repositories

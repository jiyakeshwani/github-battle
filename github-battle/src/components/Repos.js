import React from "react";

class Repos extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      activeLanguage: "All",
    };
  }
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.activeLanguage}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState) {
    if (prevState.activeLanguage !== this.state.activeLanguage) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.activeLanguage}&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data: data.items });
        });
    }
  }

  handleActiveLaunguage = (language) => {
    this.setState({
      activeLanguage: language,
    });
  };

  render() {
    let repos = this.state.data;
    console.log(repos);

    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
      <>
        <ul className="menu">
          {languages.map((language) => {
            return (
              <>
                <li
                  key={language}
                  className={
                    this.state.activeLanguage === language
                      ? "active-language"
                      : "li"
                  }
                  onClick={() => this.handleActiveLaunguage(language)}
                >
                  {language}
                </li>
              </>
            );
          })}
        </ul>
        <div className="repos">
          {repos.map((repo, index) => {
            console.log(index);
            return (
              <>
                <div className="repo">
                  <p>#{index + 1}</p>
                  <figure>
                    <img src={repo.owner.avatar_url} alt="img" />
                  </figure>
                  <h4>{repo.name}</h4>
                  <p>
                    {" "}
                    <i class="fas fa-user"></i>
                    {repo.name}
                  </p>

                  <p>
                    <i class="fas fa-star"></i> {repo.stargazers_count}
                  </p>

                  <p>
                    {" "}
                    <i class="fas fa-code-branch"></i> {repo.forks_count}
                  </p>
                  <p>
                    {" "}
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {repo.open_issues_count}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Repos;

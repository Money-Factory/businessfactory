<!-- markdownlint-disable MD033 MD041 -->
<br />
<div align="center">
  <h3 align="center">Business Factory</h3>

  <p align="center">
    Let's do business.
    <br />
    <br />
    <a href="https://github.com/Money-Factory/businessfactory/issues">Report Bug</a>
    ·
    <a href="https://github.com/Money-Factory/businessfactory/issues">Request Feature</a>
    <br />
    <br />
  </p>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- markdownlint-enable MD033 -->

## About The Project

This repository contains the source code for the Business Factory idle/incremental game.

### Built With

- [Expo](https://expo.dev/)

- [Yarn](https://yarnpkg.com/)

- [React Native](https://reactnative.dev/)

- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Below are instructions for setting up your development environment.

### Prerequisites

- Install [docker and docker-compose](https://docs.docker.com/get-docker/)

- Determine your machine's local IP address

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Money-Factory/businessfactory.git
   ```

1. Add your local IP to [`.devcontainer/.env`](.devcontainer/.env)

   ```sh
   REACT_NATIVE_PACKAGER_HOSTNAME=<your-local-ip>
   ```

1. Run docker-compose to start the application

   ```sh
   docker-compose -f ./.devcontainer/docker-compose.yml up --build
   ```

1. Go to `<your-local-ip>:19002` to view the developer tools. You can install the Expo Go app and scan the QR code to open on a mobile device

1. After you're done working and terminate the docker-compose proccess you can use the following to clean up the containers

   ```sh
   docker-compose -f ./.devcontainer/docker-compose.yml down
   ```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b username/feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin username/feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPL License. See [LICENSE.md](LICENSE.md) for more information.

## Acknowledgments

A big thanks to all the authors of the projects that make this game possible.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/Money-Factory/businessfactory.svg?style=for-the-badge
[forks-url]: https://github.com/Money-Factory/businessfactory/network/members
[stars-shield]: https://img.shields.io/github/stars/Money-Factory/businessfactory.svg?style=for-the-badge
[stars-url]: https://github.com/Money-Factory/businessfactory/stargazers
[issues-shield]: https://img.shields.io/github/issues/Money-Factory/businessfactory.svg?style=for-the-badge
[issues-url]: https://github.com/Money-Factory/businessfactory/issues
[license-shield]: https://img.shields.io/github/license/Money-Factory/businessfactory.svg?style=for-the-badge
[license-url]: https://github.com/alexwaibel/Money-Factory/businessfactory/blob/main/LICENSE.md

Buildflex is an **open-source low-code framework** to build and deploy internal tools with minimal engineering effort. buildflex's drag-and-drop frontend builder allows you to create complex, responsive frontends within minutes. Additionally, you can integrate various data sources, including databases like PostgreSQL, MongoDB, and Elasticsearch; API endpoints with OpenAPI spec and OAuth2 support; SaaS tools such as Stripe, Slack, Google Sheets, Airtable, and Notion; as well as object storage services like S3, GCS, and Minio, to fetch and write data.

:star: If you find buildflex useful, please consider giving us a star on GitHub! Your support helps us continue to innovate and deliver exciting features.

![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/buildflex/buildflex-ce)
![Number of GitHub contributors](https://img.shields.io/github/contributors/buildflex/buildflex)
[![Number of GitHub issues that are open](https://img.shields.io/github/issues/buildflex/buildflex)](https://github.com/buildflex/buildflex/issues)
[![Number of GitHub stars](https://img.shields.io/github/stars/buildflex/buildflex)](https://github.com/buildflex/buildflex/stargazers)
![Number of GitHub closed issues](https://img.shields.io/github/issues-closed/buildflex/buildflex)
![Number of GitHub pull requests that are open](https://img.shields.io/github/issues-pr-raw/buildflex/buildflex)
![GitHub release; latest by date](https://img.shields.io/github/v/release/buildflex/buildflex)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/buildflex/buildflex)
[![GitHub license which is AGPL license](https://img.shields.io/github/license/buildflex/buildflex)](https://github.com/buildflex/buildflex)
[![Follow us on X, formerly Twitter](https://img.shields.io/twitter/follow/buildflex?style=social)](https://twitter.com/buildflex)

#### Images Here

## All features

- **Visual App Builder:** 45+ built-in responsive components, including Tables, Charts, Lists, Forms, and Progress Bars.
- **buildflex Database:** Built-in no-code database.
- **Multi-Page:** Build an application with multiple pages.
- **Multiplayer editing:** Allows simultaneous app building by multiple developers.
- **50+ data sources:** Integrate with external databases, cloud storage, and APIs.
- **Desktop & mobile:** Customize layout widths to fit various screen sizes.
- **Self-host:** Supports Docker, Kubernetes, AWS EC2, Google Cloud Run, and more.
- **Collaborate:** Add comments anywhere on the canvas and tag your team members.
- **Extend with plugins:** Use our [command-line tool](https://www.npmjs.com/package/@buildflex/cli) to easily bootstrap new connectors.
- **Version control:** Manage multiple application versions with a structured release cycle.
- **Run JS & Python code:** Execute custom JavaScript and Python snippets.
- **Granular access control:** Set permissions at both group and app levels.
- **Low-code:** Use JS code almost anywhere within the builder, such as setting text color based on status with
  `status === 'success' ? 'green' : 'red'`.
- **No-code query editors:** Query Editors are available for all supported data sources.
- **Join and transform data:** Transform query results using JavaScript or Python code.
- **Secure:** All the credentials are securely encrypted using `aes-256-gcm`.
- **Data Privacy:** buildflex serves solely as a proxy and does not store data.
- **SSO:** Supports multiple Single Sign-On providers.

<hr>

## Quickstart
The easiest way to get started with buildflex is by creating a [buildflex Cloud](https://buildflex.com) account. buildflex Cloud offers a hosted solution of buildflex. If you want to self-host buildflex, kindly proceed to [deployment documentation](https://docs.buildflex.com/docs/setup/).

You can deploy buildflex on DigitalOcean using one-click-deployment.

<p align="center">
  <a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/buildflex/buildflex/tree/main"><img src="https://www.deploytodo.com/do-btn-blue.svg" alt="Deploy to DigitalOcean" height=32></a>
</p>

### Try using Docker
Want to give buildflex a quick spin on your local machine? You can run the following command from your terminal to have buildflex up and running right away.


```bash
docker run \
  --name buildflex \
  --restart unless-stopped \
  -p 80:80 \
  --platform linux/amd64 \
  -v buildflex_data:/var/lib/postgresql/13/main \
  buildflex/try:EE-LTS-latest
```

*For users upgrading their buildflex version, we recommend choosing the LTS version over the latest version. The LTS version ensures stability with production bug fixes, security patches, and performance enhancements.*

## Tutorials and examples

[Time Tracker Application](https://docs.buildflex.com/docs/#quickstart-guide)<br>
[Build your own CMS using low-code](https://blog.buildflex.com/build-cms-using-lowcode-and-mongodb/)<br>
[AWS S3 Browser](https://blog.buildflex.com/build-an-aws-s3-broswer-with-buildflex/)<br>

## Documentation
Documentation is available at https://docs.buildflex.com.

- [Getting Started](https://docs.buildflex.com)<br>
- [Data source Reference](https://docs.buildflex.com/docs/data-sources/airtable/)<br>
- [Component Reference](https://docs.buildflex.com/docs/widgets/button)

## Self-hosted
You can use buildflex Cloud for a fully managed solution. If you want to self-host buildflex, we have guides on deploying buildflex on Kubernetes, AWS EC2, Docker, and more.

| Provider  | Documentation |
| :------------- | :------------- |
| Digital Ocean | [Link](https://docs.buildflex.com/docs/setup/digitalocean)  |
| Docker  | [Link](https://docs.buildflex.com/docs/setup/docker)   |
| AWS EC2 | [Link](https://docs.buildflex.com/docs/setup/ec2)  |
| AWS ECS | [Link](https://docs.buildflex.com/docs/setup/ecs)   |
| OpenShift | [Link](https://docs.buildflex.com/docs/setup/openshift)   |
| Helm | [Link](https://docs.buildflex.com/docs/setup/helm)   |
| AWS EKS (Kubernetes) | [Link](https://docs.buildflex.com/docs/setup/kubernetes)   |
| GCP GKE (Kubernetes) | [Link](https://docs.buildflex.com/docs/setup/kubernetes-gke)   |
| Azure AKS (Kubernetes) | [Link](https://docs.buildflex.com/docs/setup/kubernetes-aks)   |
| Azure Container | [Link](https://docs.buildflex.com/docs/setup/azure-container)   |
| Google Cloud Run  | [Link](https://docs.buildflex.com/docs/setup/google-cloud-run)   |
| Deploying buildflex client  | [Link](https://docs.buildflex.com/docs/setup/client)   |
| Deploying buildflex on a Subpath  | [Link](https://docs.buildflex.com/docs/setup/buildflex-subpath/)   |

## Marketplace
buildflex can now be found on both AWS and Azure Marketplaces, making it simpler than ever to access and deploy our app-building platform.

Find buildflex on AWS Marketplace [here](https://aws.amazon.com/marketplace/pp/prodview-fxjto27jkpqfg?sr=0-1&ref_=beagle&applicationId=AWSMPContessa) and explore seamless integration on Azure Marketplace [here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/buildflexsolutioninc1679496832216.buildflex?tab=Overview).

## Community support
For general help using buildflex, please refer to the official [documentation](https://docs.buildflex.com/docs/). For additional help, you can use one of these channels to ask a question:

- [Slack](https://buildflex.com/slack) - Discussions with the community and the team.
- [GitHub](https://github.com/buildflex/buildflex/issues) - For bug reports and feature requests.
- [𝕏 (Twitter)](https://twitter.com/buildflex) - Get the product updates quickly.

## Roadmap
Check out our [roadmap](https://github.com/buildflex/buildflex/projects/2) to stay updated on recently released features and learn about what's coming next.

## Branching model
We use the git-flow branching model. The base branch is `develop`. If you are looking for a stable version, please use the main branch or tags labeled as v1.x.x.

## Contributing
Kindly read our [Contributing Guide](CONTRIBUTING.md) to familiarize yourself with buildflex's development process, how to suggest bug fixes and improvements, and the steps for building and testing your changes. <br>

## Contributors
<a href="https://github.com/buildflex/buildflex/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=buildflex/buildflex&max=400&columns=20" />
</a>

## License
BuildFlex © 2024, BuildFlex Inc - Released under the GNU Affero General Public License v3.0.

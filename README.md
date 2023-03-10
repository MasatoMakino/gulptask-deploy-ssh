# gulptask-deploy-ssh

> **Warning**
>
> This project has been archived. As an alternative, please use the `rsync` command on npm-script.

> Web page deployment tasks for SSH and rsync.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Getting Started

### Install

```bash
npm install --save-dev gulp
```

and

```bash
npm install --save-dev @masatomakino/gulptask-deploy-ssh
```

### Run in gulpfile.js

#### ssh config

Set up your [`~/.ssh/config`](https://linux.die.net/man/5/ssh_config)

```
Host <Host section name>
 HostName <example.com>
 IdentityFile  <e.g. ~/.ssh/id_rsa>
 User <user name>
 Port <port number>
```

#### gulpfile.js

```js
const { deploy } = require("@masatomakino/gulptask-deploy-ssh").get({
  host: "Host section name", //<Host section name> in `~/.ssh/config`
  destination: "path/to/public_html",
});

exports.deploy = deploy;
```

## License

[MIT licensed](LICENSE).

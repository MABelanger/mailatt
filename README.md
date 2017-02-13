# mailatt

The first objective of this package comes from the need to get a daily backup to my email with attachments. Let's say you need to back up a database every day and send a compressed file to the same email, several times a week as a cron job.

## Requirement
Node.js v6+

## 1. Installation and run cli

### Globally
```
$ npm install -g mailatt
$ mailatt --version
```

### Inside a npm package
```
$ npm install mailatt
$ ./node_modules/.bin/mailatt --version
```

## 2. Configuration
To use this command, you need an `SMTP address` transport with the `username` and `password` that you can configure with the `--configure` parameter.

You will be prompted to enter the configuration :

Question | Description
--- | ---
**SMTP address:** | The SMTP server address
**username:** | The SMTP user name
**password:** | The SMTP password
**to:** | The email of the recipient
**reply To:** | The email to reply
**from:** | The email of the sender
**subject:** | The subject of the email
**html:** | The body text in html format

Example:

```
$ mailatt --configure

? SMTP address: smtp.example.com
? username:     username
? password:     password
? to:           to@example.com
? reply To:     from@example.com
? from:         from@example.com
? subject:      daily backup
? html:         <h1>My Backup</h1>
The configuration was saved!
```

## 3. Send attachments
When the configuration is complete, this package uses an email template with attachments specified by his operands. You can send multiple attachments by adding multiple paths separate by space. If the email is sent successfully, you will receive a confirmation message. `email sent successfully!` If not, you will get an error why. Example:

```
$ mailatt ./backup1.zip ./backup2.zip
email sent successfully!
```

Note that you can use wildcard character `*` as operands to send attachments that correspond to the pattern matching. Example:
```
$ mailatt *.zip
email sent successfully!
```

## API
```
Usage: mailatt [options] [file ...]

Options:

  --configure          configure the transport and the email fields
  --version            output the version number
```

## Upgrade

```
$ npm install -g mailatt@latest
# or
$ npm install mailatt@latest
```

## FAQ
1. <b>Where my configurations is saved?</b>
  * The configuration is split into two json files:
    1. <b>transport.json</b>: That contain your `username` and `password` with the `SMTP address`.
    2. <b>fields.json</b>: That contain the information about the email fields `to:`, `subject:` ect...
  * The location of the configurations json files can be in two different place:
      - If you have installed the module into a npm package (no global):
         - `./node_modules/mailatt/dist/config/answers/`
      - If you have installed the package globally with `-g` and let say you use nvm with node version 6.9.5:
         - ` ~/.nvm/versions/node/v6.9.5/lib/node_modules/mailatt/dist/config/answers/`

2. <b>Does my `username` and `password` is encrypted?</b>
   No, in the next version it will :)

3. <b>If i uninstall the package does my configuration files is removed to?</b>
   Yes!

3. <b>What if i want to improve the code or add functionalities?</b>
   Please take a look into the [CONTRIBUTING.md](CONTRIBUTING.md)

## Unistall

```
$ npm uninstall -g mailatt
# or
$ npm uninstall mailatt
```

# mailatt

The first objective of this package comes from the need to get a daily backup of my email with attachments. Let's say you need to back up a database every day and send a compressed file to the same email, several times a week as a cron job.

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
To use this command, you need an `SMTP url` transport with the` username` and `password`, that you can enter with the `--configure` parameter. You will be prompted to enter the configuration. Example:

```
$ mailatt --configure

? SMTP host:  smtp.example.com
? username:   username
? password:   password
? to:         to@example.com
? reply To:   from@example.com
? from:       from@example.com
? subject:    daily backup
? html:       <h1>My Backup</h1>
The file was saved!
```

## 3. Send attachments
When the configuration is complete, this package uses an email template with attachments specified with the argument
`--att`. You can send multiple attachments by adding `--att` multiples times. If the email is sent successfully, you will receive a confirmation message. `email sent successfully!` If not, you will get an error why. Example:

```
$ mailatt --att='./backup1.zip' --att='./backup2.zip'
email sent successfully!
```

## Upgrade

```
$ npm install -g mailatt@latest
# or
$ npm install mailatt@latest
```

## Unistall

```
$ npm uninstall -g mailatt
# or
$ npm uninstall mailatt
```

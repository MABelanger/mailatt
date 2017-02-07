# mailatt

The first objective of this package comes from the need to get a daily backup of my email with attachments. Let's say you need to back up a database every day and send a compressed file to the same email, several times a week as a cron job.

At this point with this package, you must transpile into ES5. So, to use it, fallow the 3 steps.

## Requirement
Node.js v6+

## 1. install and build
```
$ npm install && npm run build
```

## 2. Configuration
To use this command, you need an `SMTP url` transport with the` username` and `password`, that you can enter with the `--configure` parameter. You will be prompted to enter the configuration. Example:

```
$ node dist/index.js --configure

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
$ node dist/index.js --att='./package.json' --att='./webpack.config.babel.js'
email sent successfully!
```

# Contributing

## Pull Requests

If you would like to add functionality, please submit [an issue](https://github.com/formly-js/angular-formly/issues)
first to make sure it's a direction we want to take.

Please do the following:
* Follow the existing styles (we have an `.editorconfig` file)
* Document your changes in the README (try to follow the convention you see in the rest of the file)

### Development

1. run `npm install`
2. run `npm start` (if you're on a windows machine, see [this issue](https://github.com/formly-js/angular-formly/issues/305))
3. write tests & code in ES6 goodness :-)
4. run `git add src/`
5. run `npm run commit` and follow the prompt (this ensures that your commit message follows [our conventions](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)).
6. notice that there's a pre-commit hook that runs to ensure tests pass and coverage doesn't drop to prevent the build from breaking :-)
7. push your changes
8. create a PR with a link to the original issue
9. wait patiently :-)

#### Notes

- Please don't commit any changes to the `dist/` directory. This is only committed for releases.
- Due to some inconsistencies with angular versions, always use `require('angular-fix')` rather than simply `require('angular')`
- If you wish to view your changes visually, you can play around with it in the `local-examples` directory. Don't commit anything in this directory, but it's a good sanity check. It's just straight JavaScript with an `index.html`. I recommend `http-server`.

## Reporting Bugs / Requesting Features

[Watch video](https://www.youtube.com/watch?v=Kw9fVgc3Tzk&index=6&list=PLV5CVI1eNcJi7lVVIuNyRhEuck1Z007BH)

If you've found an issue, please submit it in [the issues](https://github.com/formly-js/angular-formly/issues)
with a link to a jsbin that demonstrates the issue with [issue.angular-formly.com](http://issue.angular-formly.com)

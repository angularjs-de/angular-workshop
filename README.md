# Workshops.DE

This project is a reference implementation for our workshops [Angular & TypeScript Workshop](https://workshops.de/seminare-schulungen-kurse/angular-typescript/).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# How to updates the steps for our Workshop
1. `git rebase -i a7bfef2d02ab39024567e281ea9b0096344494ea`
2. Change `pick` to `edit` at the tasks you want to change
3. Do your changes
4. `git commit --all --amend`
5. `git rebase --continue`
6. Fix possible merge error if needed
7. Repeat on step 3 if you edit more than one commits
8. run `./recreate-tags.sh`
9. `git push -f`
10. `git push --tags`

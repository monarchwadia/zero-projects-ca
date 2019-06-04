## Development README

```shell
# install bundler
gem install bundler

# install dependencies
bundle install

# run dev server
middleman server

## Deployment
*IMPORTANT: docs/CNAME is crucial for Github to recognize our project and deploy it to the right domain name. Make sure you `checkout docs/CNAME` to restore the deleted CNAME file before you commit and push.*

1. `middleman build`
1. `git checkout docs/CNAME # important`
1. `git add . && git commit -m "Release"`
1. `git push`

```

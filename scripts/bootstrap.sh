#! /bin/bash
# update packages
apt-get -y update

# Add repository for ruby2.3
apt-get -y install python-software-properties
apt-add-repository -y ppa:brightbox/ruby-ng

# Get 2.3 from newly added repository
apt-get -y update

# Install ruby with build tools so we can use gems
apt-get -y install build-essential
apt-get -y install ruby2.4
apt-get -y install ruby2.4-dev

# Install Github pages requirements (jekyll)
sudo gem update --system
sudo gem install jekyll bundler github-pages jekyll-paginate jemoji

# Install required NodeJS
apt-get -y install nodejs
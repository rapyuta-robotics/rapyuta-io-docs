FROM debian:jessie
RUN apt-get -qq update \
	&& DEBIAN_FRONTEND=noninteractive apt-get -qq install -y --no-install-recommends python-pygments git ca-certificates asciidoc \
	&& rm -rf /var/lib/apt/lists/*
ENV HUGO_VERSION 0.39
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.deb



ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} /tmp/hugo.deb
RUN dpkg -i /tmp/hugo.deb \
	&& rm /tmp/hugo.deb



RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.10.0
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default"
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN node -v
RUN npm -v



COPY . /appsrc
WORKDIR /appsrc
RUN npm install
WORKDIR /appsrc/hugo
RUN hugo -v
WORKDIR /appsrc

EXPOSE 3000
CMD ["node", "index.js"]

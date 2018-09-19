FROM debian:jessie
RUN apt-get -qq update \
	&& DEBIAN_FRONTEND=noninteractive apt-get -qq install -y --no-install-recommends curl python-pygments git ca-certificates asciidoc \
    && apt-get -y autoclean \
	&& rm -rf /var/lib/apt/lists/*
ENV HUGO_VERSION=0.39 \
    NVM_DIR=/usr/local/nvm \
    NODE_VERSION=10.10.0

ENV HUGO_BINARY=hugo_${HUGO_VERSION}_Linux-64bit.deb \
    NODE_PATH=$NVM_DIR/v$NODE_VERSION/lib/node_modules \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} /tmp/hugo.deb
RUN dpkg -i /tmp/hugo.deb \
	&& rm /tmp/hugo.deb
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default"



COPY . /appsrc
WORKDIR /appsrc
RUN npm install && (cd /appsrc/hugo && hugo -v )

EXPOSE 3000
CMD ["node", "index.js"]

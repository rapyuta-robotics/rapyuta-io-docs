FROM debian:jessie
RUN apt-get -qq update \
	&& DEBIAN_FRONTEND=noninteractive apt-get -qq install -y --no-install-recommends curl python-pygments git ca-certificates asciidoc \
    && apt-get -y autoclean \
	&& rm -rf /var/lib/apt/lists/*
ENV HUGO_DOWNLOAD_PATH=https://github.com/gohugoio/hugo/releases/download/v0.52/hugo_0.52_Linux-64bit.deb \
    NVM_DIR=/usr/local/nvm \
    NODE_VERSION=10.10.0 
ENV NODE_PATH=$NVM_DIR/v$NODE_VERSION/lib/node_modules \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN curl -L ${HUGO_DOWNLOAD_PATH} -o /tmp/hugo.deb && \ 
    dpkg -i /tmp/hugo.deb && \
    rm /tmp/hugo.deb && \
    curl -Ss -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default"

COPY . /appsrc
WORKDIR /appsrc
RUN bash -c "if [ -d .git ] || git rev-parse --git-dir > /dev/null 2>&1; then git submodule init && git submodule update;fi; \
    npm install && cd hugo && hugo -v" 

EXPOSE 3000
CMD ["node", "index.js"]

FROM ubuntu:18.04
RUN apt-get update \
    && apt-get  install -y --no-install-recommends curl git ca-certificates nginx \
    && apt-get -y autoclean \
    && rm -rf /var/lib/apt/lists/*

ENV HUGO_DOWNLOAD_PATH=https://github.com/gohugoio/hugo/releases/download/v0.52/hugo_0.52_Linux-64bit.deb 

RUN curl -L ${HUGO_DOWNLOAD_PATH} -o /tmp/hugo.deb && \ 
    dpkg -i /tmp/hugo.deb && \
    rm /tmp/hugo.deb 

COPY . /appsrc
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /appsrc
RUN bash -c "if [ -d .git ] || git rev-parse --git-dir > /dev/null 2>&1; then git submodule init && git submodule update; fi;" \
    &&(cd hugo && hugo -v ) \
    && rm /etc/nginx/sites-enabled/default \
    && cp -R /appsrc/hugo/public/* /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]